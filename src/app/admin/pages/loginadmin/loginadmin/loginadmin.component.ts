import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.scss']
})
export class LoginadminComponent implements OnInit {

  constructor(private router: Router, private toast: NgToastService) { }
  hide = true;

  ;
  ngOnInit(): void {
  }
  checked = true;
  formLogin: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  getErrorMessage() {
    if (this.formLogin.value.name.hasError('required') && this.formLogin.value.password.hasError('required')) {
      return 'Vui lòng nhập đầy đủ thông tin';
    }

    return this.formLogin.value.name.hasError('name') ? 'Not a valid email' : '';
  }
  OnLogin() {
    if (this.formLogin.value.name === 'admin' && this.formLogin.value.password === '123') {
      this.toast.success({ detail: 'Thành công', summary: 'Đăng nhập thành công', duration: 4000 })
      this.router.navigate(['/admin/Home']);
    }
    else {
      this.toast.error({ detail: 'Thất bại', summary: 'Có lỗi xảy ra vui lòng kiểm tra lại !', duration: 4000 })
    }
  }
}
