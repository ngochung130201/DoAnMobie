import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { SuppliersService } from 'src/app/admin/service/suppliers/suppliers.service';
import { TySuppliers } from 'src/app/admin/types/TySuppliers';
import { TypeDeleteSuppliers } from '../suppliers-index/suppliers-index.component';
@Component({
  selector: 'app-suppliers-delete',
  templateUrl: './suppliers-delete.component.html',
  styleUrls: ['./suppliers-delete.component.scss']
})
export class SuppliersDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TypeDeleteSuppliers, private SuppliersService: SuppliersService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {


  }
  SuppliersID: string = '';
  listSuppliers: Array<TySuppliers> = [];

  handleDelete() {
    this.SuppliersID = this.data.SuppliersID;
    console.log(this.SuppliersID);
    this.SuppliersService.deleteSuppliers(this.SuppliersID).subscribe(
      {
        next: (data => {
          this.toast.success({ detail: 'Thành công', summary: 'Xóa thành công', duration: 4000 })
          this.reloadCurrentRoute();
        }),
        error: (err => {
          this.toast.error({ detail: 'Thất bại', summary: 'Có lỗi xảy ra vui lòng kiểm tra lại !', duration: 4000 })
        })
      }
    )
  }

  reloadCurrentRoute() {

    let currentUrl = this.router.url;
    this.router.navigateByUrl('http://localhost:4200/admin/suppliers', { skipLocationChange: true }).then(() => {

      this.router.navigate([currentUrl]);
    });
  }


}
