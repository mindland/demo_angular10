import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let authToken = '';
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user') as string);
      authToken = `Bearer ${user.accessToken}`;
    }

    //clone the request and replace the original headers with cloned headers, updated with the authorization
    const authReq = request.clone({
      headers: request.headers.set('authorization', authToken),
    });

    return next.handle(request);
  }
}
