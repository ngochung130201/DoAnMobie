import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BrandService } from 'src/app/admin/service/brand/brand.service';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.scss']
})
export class BrandCreateComponent implements OnInit {

  constructor(private router: Router, private BrandService: BrandService, private toast: NgToastService) { }

  ngOnInit(): void {
  }
  brandFormCreate: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  })
  handleCreate() {
    if (!this.brandFormCreate.valid) {
      this.toast.error({ detail: 'Thất bại', summary: 'Vui lòng nhập đủ thông tin', duration: 4000 });
      return;
    }

    this.BrandService.createBrand(this.brandFormCreate.value)
      .subscribe(
        item => {
          this.toast.success({ detail: 'Thành công', summary: 'Thêm thành công', duration: 4000 });
          this.router.navigate(['/admin/brand']);
        },
        err => {
          console.log(err);
          this.toast.error({ detail: 'Thất bại', summary: ` ${err.error} !`, duration: 4000 });
        }
      );
  }

}
