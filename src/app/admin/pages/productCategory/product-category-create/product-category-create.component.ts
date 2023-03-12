import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProductCategoryService } from 'src/app/admin/service/productCategory/product-category.service';

@Component({
  selector: 'app-product-category-create',
  templateUrl: './product-category-create.component.html',
  styleUrls: ['./product-category-create.component.scss']
})
export class ProductCategoryCreateComponent implements OnInit {

  constructor(private router: Router, private ProductCategoryService: ProductCategoryService, private toast: NgToastService) { }

  ngOnInit(): void {
  }
  ProductCategoryFormCreate: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    sort: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(8),

    ]),
    slug: new FormControl(''),
    parentID: new FormControl(1),
    metaKeyword: new FormControl(''),
    metaDescription: new FormControl(''),
    createBy: new FormControl(1),
    updateBy: new FormControl(1),
    createDate: new FormControl(Date.now),
    updateDate: new FormControl(Date.now),
    isStatus: new FormControl(true, Validators.required),

  })
  handleCreate() {
    if (!this.ProductCategoryFormCreate.valid) {
      this.toast.error({ detail: 'Thất bại', summary: 'Vui lòng nhập đủ thông tin', duration: 4000 });
      return;
    }

    this.ProductCategoryService.createProductCategory(this.ProductCategoryFormCreate.value)
      .subscribe(
        item => {
          this.toast.success({ detail: 'Thành công', summary: 'Thêm thành công', duration: 4000 });
          this.router.navigate(['/admin/productCategory']);
        },
        err => {

          this.toast.error({ detail: 'Thất bại', summary: ` ${err.error.err} !`, duration: 4000 });
        }
      );
  }


}
