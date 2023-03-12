import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BrandService } from 'src/app/admin/service/brand/brand.service';
import { ProductService } from 'src/app/admin/service/product/product.service';
import { ProductCategoryService } from 'src/app/admin/service/productCategory/product-category.service';
import { SuppliersService } from 'src/app/admin/service/suppliers/suppliers.service';
import { TyBrand } from 'src/app/admin/types/TyBrand';
import { TyProductCategory } from 'src/app/admin/types/TyProductCategory';
import { TySuppliers } from 'src/app/admin/types/TySuppliers';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  constructor(
    private categoryProductService: ProductCategoryService,
    private brandService: BrandService,
    private supplierService: SuppliersService,
    private productService: ProductService,
    private currencyPipe: CurrencyPipe,
    private toast: NgToastService,
    private router: Router,
    private _routerAc: ActivatedRoute

  ) { }
  slug: string = ''
  id: string = '';
  ngOnInit(): void {
    this.getData()


  }

  productFormEdit: FormGroup = new FormGroup(
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
      isFreeship: new FormControl(true, Validators.required),
    }
  )
  listCates: Array<TyProductCategory> = []
  listBrands: Array<TyBrand> = []
  listSuppliers: Array<TySuppliers> = []
  formattedAmount: any = 1;
  price = 1;
  getData() {
    this.slug = this._routerAc.snapshot.params['id'];
    this.categoryProductService.getAllProductCategory().subscribe(cate => {
      this.listCates = cate

    })
    this.brandService.getAllBrand().subscribe(brand => {
      this.listBrands = brand

    })
    this.supplierService.getAllSuppliers().subscribe(supplier => {
      this.listSuppliers = supplier
    })
    this.productService.getProduct(this.slug).subscribe({
      next: (pro => {
        this.id = pro.productID;
        console.log(pro);
        this.productFormEdit = new FormGroup(
          {
            productID: new FormControl(pro.productID),
            name: new FormControl(pro.name, Validators.required),
            quantity: new FormControl(pro.quantity, Validators.required),
            price: new FormControl(pro.price, Validators.required),
            promotionPrice: new FormControl(pro.promotionPrice, Validators.required),
            metaDescription: new FormControl(pro.metaDescription, Validators.required),
            metaKeyword: new FormControl(pro.metaKeyword, Validators.required),
            description: new FormControl(pro.description, Validators.required),
            cateID: new FormControl(pro.cateID, Validators.required),
            supplierid: new FormControl(pro.supplierid, Validators.required),
            brandID: new FormControl(pro.brandID, Validators.required),
            image: new FormControl(pro.image, Validators.required),
            isFreeship: new FormControl(pro.isFreeship, Validators.required),

          }
        )

      })
    })

  }
  OnEdit() {
    this.productService.updateProduct(this.id, this.productFormEdit.value).subscribe({
      next: (item => {
        this.toast.success({ detail: 'Thành công', summary: 'Cập nhật thành công', duration: 4000 })
        this.router.navigate(['/admin/product']);
      }),
      error: (err) => {
        this.toast.error({ detail: 'Thất bại', summary: 'Có lỗi xảy ra', duration: 4000 })
        console.log(err);
      }
    })
  }


}
