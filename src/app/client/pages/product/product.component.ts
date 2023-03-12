import { Component, OnInit } from '@angular/core';

import { faAngleUp, faTruckFast, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { TypeProducts } from 'src/app/admin/types/TypeProducts';
import { ProductClientService } from '../../services/productClient/product-client.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductClientService) { }
  upIcon: IconDefinition = faAngleUp;
  freeShip = faTruckFast;
  ngOnInit(): void {
    this.getAllProduct()
  }
  listProduct: Array<TypeProducts> = [];

  getAllProduct() {
    this.productService.getAllProduct().subscribe(product => {
      this.listProduct = product.products;
      return this.listProduct;
    }
    )
  }
}
