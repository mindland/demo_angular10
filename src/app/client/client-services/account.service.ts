import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  register(objNewRegister): Observable<any> {
    const apiRegister =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';
    return this.httpClient.post(apiRegister, objNewRegister).pipe(
      tap((data) => {
        // console.log(data);
      }),
      catchError((err) => {
        return this.handleErr(err);
      })
    );
  }

  
  login(objLogin): Observable<any> {
    const apiRegister =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';
    return this.httpClient.post(apiRegister, objLogin).pipe(
      tap((data) => {
        // console.log(data);
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


