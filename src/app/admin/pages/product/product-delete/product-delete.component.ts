import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProductService } from 'src/app/admin/service/product/product.service';
import { TypeDelete } from 'src/app/admin/types/TypeDelete';
import { TypeProducts } from 'src/app/admin/types/TypeProducts';
import { ProductAdminComponent } from '../product-admin/product-admin.component';
@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TypeDelete, private ProductService: ProductService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {

  }
  id: string = '';
  listProduct: Array<TypeProducts> = [];


  reloadCurrentRoute() {
    // this.handleDelete()
    let currentUrl = this.router.url;
    this.router.navigateByUrl('http://localhost:4200/admin/Product', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);

    });
  }
  handleDelete() {
    this.id = this.data.id;
    this.ProductService.deleteProduct(this.id).subscribe(
      {
        next: (data => {
          this.toast.success({ detail: 'Thành công', summary: 'Xóa thành công', duration: 4000 })
          this.reloadCurrentRoute()
        }),
        error: (err => {

        })
      }
    )
  }


}
