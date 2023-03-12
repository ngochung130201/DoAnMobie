import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BrandService } from 'src/app/admin/service/brand/brand.service';
import { TyBrand } from 'src/app/admin/types/TyBrand';
import { TypeDeleteBrand } from '../brand-index/brand-index.component';

@Component({
  selector: 'app-brand-delete',
  templateUrl: './brand-delete.component.html',
  styleUrls: ['./brand-delete.component.scss']
})
export class BrandDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TypeDeleteBrand, private BrandService: BrandService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {
  }
  brandID: string = '';
  listBrand: Array<TyBrand> = [];

  handleDelete() {
    this.brandID = this.data.brandID;
    console.log(this.brandID);
    this.BrandService.deleteBrand(this.brandID).subscribe(
      {
        next: (data => {

        }),
        error: (err => {
          this.toast.error({ detail: 'Thất bại', summary: 'Có lỗi xảy ra vui lòng kiểm tra lại !', duration: 4000 })
        })
      }
    )
  }

  reloadCurrentRoute() {
    this.handleDelete()
    let currentUrl = this.router.url;
    this.router.navigateByUrl('http://localhost:4200/admin/brand', { skipLocationChange: true }).then(() => {
      this.toast.success({ detail: 'Thành công', summary: 'Xóa thành công', duration: 4000 })
      this.router.navigate([currentUrl]);
    });
  }


}
