import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProxyService {
  constructor(private httpClient: HttpClient) {}

  get(api: string): Observable<any> {
    return this.httpClient.get(api).pipe(
      tap((data) => {
        console.log(data);
      }),
      catchError((err) => {
        return this.handleErr(err);
      })
    );
  }

  handleErr(err: any): any {
    switch (err.status) {
      case 500:
        alert(err.error);
        break;
      case 404:
        alert(err.statusText);
        break;
      default:
        break;
    }
    return throwError(err);
  }
}
