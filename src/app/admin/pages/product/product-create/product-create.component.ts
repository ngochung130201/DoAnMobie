import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BrandService } from 'src/app/admin/service/brand/brand.service';
import { ProductService } from 'src/app/admin/service/product/product.service';
import { ProductCategoryService } from 'src/app/admin/service/productCategory/product-category.service';
import { SuppliersService } from 'src/app/admin/service/suppliers/suppliers.service';
import { TyBrand } from 'src/app/admin/types/TyBrand';
import { TyProductCategory } from 'src/app/admin/types/TyProductCategory';
import { TySuppliers } from 'src/app/admin/types/TySuppliers';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private categoryProductService: ProductCategoryService,
    private brandService: BrandService,
    private supplierService: SuppliersService,
    private productService: ProductService,
    private currencyPipe: CurrencyPipe,
    private toast: NgToastService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  productFormCreate: FormGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      quantity: new FormControl(1, Validators.required),
      price: new FormControl(1, Validators.required),
      promotionPrice: new FormControl(1, Validators.required),
      metaDescription: new FormControl('', Validators.required),
      metaKeyword: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      cateID: new FormControl('', Validators.required),
      supplierid: new FormControl('', Validators.required),
      brandID: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      percentPrice: new FormControl('', Validators.required),
      isFreeship: new FormControl(true, Validators.required),

    }
  )
  listCates: Array<TyProductCategory> = []
  listBrands: Array<TyBrand> = []
  listSuppliers: Array<TySuppliers> = []
  formattedAmount: any = 1;
  price = 1;
  getData() {
    this.categoryProductService.getAllProductCategory().subscribe(cate => {
      this.listCates = cate
      console.log(this.listCates);
    })
    this.brandService.getAllBrand().subscribe(brand => {
      this.listBrands = brand

    })
    this.supplierService.getAllSuppliers().subscribe(supplier => {
      this.listSuppliers = supplier
    })
    this.productFormCreate.value.promotionPrice = this.prices * (100 - this.percentPrice);
  }
  promotionPrice: number = 0;
  prices: number = +this.productFormCreate.value.price;
  percentPrice: number = +this.productFormCreate.value.percentPrice / 100;
  OnCreate() {
    this.productFormCreate.value.promotionPrice = this.prices * (100 - this.percentPrice);
    this.productService.createProduct(this.productFormCreate.value).subscribe({
      next: (item => {
        this.toast.success({ detail: 'Thành công', summary: 'Thêm thành công', duration: 4000 })
        this.router.navigate(['/admin/product']);
      }),
      error: (err) => {
        console.log(err);
        this.toast.error({ detail: 'Thất bại', summary: 'Có lỗi xảy ra', duration: 4000 })
      }
    })
  }
  //  hàm thêm dấu , vào price
  formatPrice() {
    const priceControl = this.productFormCreate.get('price');
    const priceValue = priceControl!.value;
    if (priceValue !== null) {
      const formattedPrice = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
      }).format(priceValue);

      priceControl!.setValue(formattedPrice, { emitEvent: false });
    }
  }
}
