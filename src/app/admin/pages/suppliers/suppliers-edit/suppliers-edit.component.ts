import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { SuppliersService } from 'src/app/admin/service/suppliers/suppliers.service';

@Component({
  selector: 'app-suppliers-edit',
  templateUrl: './suppliers-edit.component.html',
  styleUrls: ['./suppliers-edit.component.scss']
})
export class SuppliersEditComponent implements OnInit {
  constructor(private router: Router, private SuppliersService: SuppliersService, private toast: NgToastService, private routeAc: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDetail()
  }


  suppliersID: string = '';
  errorPhone: string = '';
  errorEmail: string = '';
  suppliersFormEdit: FormGroup = new FormGroup({
    supplierID: new FormControl(''),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")),
    address: new FormControl(''),
    phone: new FormControl('', [

      Validators.pattern('[- +()0-9]{10}')

    ])
  })
  getDetail() {
    this.suppliersID = this.routeAc.snapshot.params['id'];
    console.log(this.suppliersID);
    this.SuppliersService.getSuppliers(this.suppliersID).subscribe(suppliers => {
      this.suppliersFormEdit = new FormGroup({
        supplierID: new FormControl(this.suppliersID),
        name: new FormControl(suppliers.name),
        email: new FormControl(suppliers.email),
        address: new FormControl(suppliers.address),
        phone: new FormControl(suppliers.phone)
      })
    })
  }

  handleEdit() {
    if (!this.suppliersFormEdit.valid) {
      this.toast.error({ detail: 'Thất bại', summary: 'Vui lòng nhập đủ thông tin', duration: 4000 });
      return;
    }

    this.SuppliersService.updateSuppliers(this.suppliersID, this.suppliersFormEdit.value)
      .subscribe(
        item => {
          this.toast.success({ detail: 'Thành công', summary: 'Cập nhật thành công', duration: 4000 });
          this.router.navigate(['/admin/suppliers']);
        },
        err => {
          console.log(err)


          if (err.error.errors.Phone === undefined) {
            this.errorEmail = err.error.errors.Email
            this.toast.error({ detail: 'Thất bại', summary: ` ${err.error.errors.Email} `, duration: 4000 });
          }
          if (err.error.errors.Email === undefined) {
            this.errorPhone = err.error.errors.Phone
            this.toast.error({ detail: 'Thất bại', summary: ` ${err.error.errors.Phone} `, duration: 4000 });
          }
        }
      );
  }

}
