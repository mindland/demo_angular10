import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../client-services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') frmRegister!: NgForm;

  registerList: any[] = [];
  objectDefaltAccount = {
    account: 'account default',
    email: 'email@gmail.com',
  };

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  validation(): void {}

  register(form: any): void {
    this.registerList.push(form.value);

    const objRegister = {
      taiKhoan: form.value.account,
      matKhau: form.value.password,
      email: form.value.email,
      soDt: form.value.phone,
      maNhom: 'GP01',
      maLoaiNguoiDung: 'KhachHang',
      hoTen: form.value.name,
    };

    this.accountService.register(objRegister).subscribe((res) => {
      alert('Dang ky thanh cong');
    });
  }

  canDeactivate() {
    return this.frmRegister.submitted;
  }
}
