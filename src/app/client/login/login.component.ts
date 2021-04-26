import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../client-services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  objLogin: any = {};

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      account: new FormControl('account'),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  login(): void {
    console.log(this.loginForm);
    this.objLogin = {
      taiKhoan: this.loginForm.value.account,
      matKhau: this.loginForm.value.password,
    };
    this.accountService.login(this.objLogin).subscribe((data) => {
      localStorage.setItem('user', JSON.stringify(data));
      this.router.navigate(['admin']);
      alert('Dang nhap thanh cong');
    });
  }
}

// reactive Form, form template
