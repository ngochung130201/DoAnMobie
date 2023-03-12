import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProductCategoryService } from 'src/app/admin/service/productCategory/product-category.service';
import { TyProductCategory } from 'src/app/admin/types/TyProductCategory';
import { TypeDeleteProductCategory } from '../product-category-index/product-category-index.component';

@Component({
  selector: 'app-product-category-delete',
  templateUrl: './product-category-delete.component.html',
  styleUrls: ['./product-category-delete.component.scss']
})
export class ProductCategoryDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TypeDeleteProductCategory, private ProductCategoryservice: ProductCategoryService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {

  }
  cateID: string = '';
  listMenu: Array<TyProductCategory> = [];

  handleDelete() {
    this.cateID = this.data.ProductCategoryID;
    this.ProductCategoryservice.deleteProductCategory(this.cateID).subscribe(
      {
        next: (data => {
          this.toast.success({ detail: 'Thành công', summary: 'Xóa thành công', duration: 4000 })
          this.reloadCurrentRoute()
        }),
        error: (err => {
          this.toast.error({ detail: 'Thất bại', summary: 'Có lỗi xảy ra vui lòng kiểm tra lại !', duration: 4000 })
        })
      }
    )
  }

  reloadCurrentRoute() {


    let currentUrl = this.router.url;
    this.router.navigateByUrl('http://localhost:4200/admin/productCategory', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }


}
