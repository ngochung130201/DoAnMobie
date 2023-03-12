import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/admin/service/product/product.service';
import { sortOption, TypeProducts } from 'src/app/admin/types/TypeProducts';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';
@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss']
})

export class ProductAdminComponent implements OnInit {

  constructor(public dialog: MatDialog, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductALL()
    this.getOptionValue('')
  }
  products: Array<TypeProducts> = [];
  search = {
    searchValue: ''
  }

  action: boolean = true;
  fakePage: number = 1;
  pageIndex: number | undefined = 1;
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  countProduct: string = '';
  fakeArray = new Array();
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id: string, name: string): void {
    this.dialog.open(ProductDeleteComponent, {
      width: '250px',
      data:
      {
        id: id,
        name: name,
      }

    });
  }
  getProductALL(sort: string = '', search: string = '', page: number = 1) {
    this.productService.getAllProduct(sort, search, page).subscribe(products => {
      this.products = products.products;
      this.countProduct = products.countProduct
      // console.log(this.products);
      this.fakeArray = new Array(products.totalPages);

      return this.products;
    })
  }
  sortOption: Array<sortOption> = [
    {
      name: 'Ngày tạo',
      type: ""
    },
    {
      name: 'Giảm dần',
      type: "price_desc"
    },
    {
      name: 'Tăng dần',
      type: "price_asc"
    },
    {
      name: 'Số lượng < 10',
      type: "quantity10"
    }

  ]
  getOptionValue(event: any, page?: number, action?: boolean) {
    const sort = event.value;
    if (page === undefined) {
      this.pageIndex = 1;
      console.log(this.pageIndex);
    }
    else {
      this.pageIndex = page;
    }
    this.getProductALL(sort, this.search.searchValue, page)
    if (action === true) {
      const pageAction = this.fakePage!++;
      if (this.fakeArray.length >= pageAction) {
        this.getProductALL(sort, this.search.searchValue, pageAction)
        console.log(pageAction);
        console.log(this.action);
      }
      else {
        this.action = false
        console.log(this.action);
      }

    }


  }

}
