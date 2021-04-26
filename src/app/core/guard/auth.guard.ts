import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('user') as string);
    if (user) {
      if (user.maLoaiNguoiDung === 'QuanTri') {
        return true;
      }
      else{
        alert('Khong phai quyen quan tri');
      }
    }
    
    return false;
  }
}
