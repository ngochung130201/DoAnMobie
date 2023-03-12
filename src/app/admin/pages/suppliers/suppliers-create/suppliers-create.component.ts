import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { SuppliersService } from 'src/app/admin/service/suppliers/suppliers.service';

@Component({
  selector: 'app-suppliers-create',
  templateUrl: './suppliers-create.component.html',
  styleUrls: ['./suppliers-create.component.scss']
})
export class SuppliersCreateComponent implements OnInit {

  constructor(private router: Router, private SuppliersService: SuppliersService, private toast: NgToastService) { }

  ngOnInit(): void {
  }
  errorPhone: string = '';
  suppliersFormCreate: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")),
    address: new FormControl(''),
    phone: new FormControl('', [

      Validators.pattern('[- +()0-9]{10}')

    ])
  })
  handleCreate() {
    if (!this.suppliersFormCreate.valid) {
      this.toast.error({ detail: 'Thất bại', summary: 'Vui lòng nhập đủ thông tin', duration: 4000 });
      return;
    }

    this.SuppliersService.createSuppliers(this.suppliersFormCreate.value)
      .subscribe(
        item => {
          this.toast.success({ detail: 'Thành công', summary: 'Thêm thành công', duration: 4000 });
          this.router.navigate(['/admin/suppliers']);
        },
        err => {
          console.log(err)
          this.errorPhone = err.error.errors.Phone
          this.toast.error({ detail: 'Thất bại', summary: ` ${err.error.errors.Phone}`, duration: 4000 });
        }
      );
  }


}
