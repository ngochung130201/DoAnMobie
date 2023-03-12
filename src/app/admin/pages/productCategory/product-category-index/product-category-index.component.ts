import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductCategoryService } from 'src/app/admin/service/productCategory/product-category.service';
import { TyProductCategory } from 'src/app/admin/types/TyProductCategory';
import { ProductCategoryDeleteComponent } from '../product-category-delete/product-category-delete.component';
export type TypeDeleteProductCategory = {
  ProductCategoryID: string,
  name: string
}
@Component({
  selector: 'app-product-category-index',
  templateUrl: './product-category-index.component.html',
  styleUrls: ['./product-category-index.component.scss']
})
export class ProductCategoryIndexComponent implements OnInit {

  constructor(public dialog: MatDialog, private ProductCategoryService: ProductCategoryService) { }

  ngOnInit(): void {
    this.handleGetProductCategory();
  }
  getProductCategorys: Array<TyProductCategory> = [];
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, ProductCategoryID: string, name: string): void {
    this.dialog.open(ProductCategoryDeleteComponent, {
      width: '250px',
      data:
      {
        ProductCategoryID: ProductCategoryID,
        name: name,
      }

    });
  }
  handleGetProductCategory() {
    this.ProductCategoryService.getAllProductCategory().subscribe(data => {
      this.getProductCategorys = data;
      return this.getProductCategorys;
    })
  }

}
