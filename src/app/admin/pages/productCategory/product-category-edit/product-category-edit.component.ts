import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProductCategoryService } from 'src/app/admin/service/productCategory/product-category.service';

@Component({
  selector: 'app-product-category-edit',
  templateUrl: './product-category-edit.component.html',
  styleUrls: ['./product-category-edit.component.scss']
})
export class ProductCategoryEditComponent implements OnInit {

  constructor(private _routerAc: ActivatedRoute, private router: Router, private ProductCategoryService: ProductCategoryService, private toast: NgToastService) { }
  ProductCategoryFormEdit: FormGroup = new FormGroup({
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
  slug: string = '';
  ngOnInit(): void {
    this.getProductCategory()
  }
  getProductCategory() {
    this.slug = this._routerAc.snapshot.params['slug'];
    console.log(this.slug)
    this.ProductCategoryService.getProductCategory(this.slug).subscribe({
      next: (res => {
        this.ProductCategoryFormEdit = new FormGroup({
          name: new FormControl(res.name, Validators.required),
          sort: new FormControl(res.sort, [
            Validators.required,
            Validators.pattern("^[0-9]*$"),
            Validators.minLength(8),

          ]),
          slug: new FormControl(res.slug),
          parentID: new FormControl(1),
          metaKeyword: new FormControl(res.metaKeyword),
          metaDescription: new FormControl(res.metaDescription),
          createBy: new FormControl(1),
          updateBy: new FormControl(1),
          createDate: new FormControl(Date.now),
          updateDate: new FormControl(Date.now),
          isStatus: new FormControl(true, Validators.required),

        })

      }),
      error: (err => {
        console.log(err);
      })
    })
  }
  handleEdit() {
    try {
      this.ProductCategoryService.updateProductCategory(this.slug, this.ProductCategoryFormEdit.value).subscribe({
        next: (res => {
          this.toast.success({ detail: 'Thành công', summary: 'Cập nhật thành công', duration: 4000 })
          this.router.navigate(['/admin/productCategory']);
        }),
        error: (err) => {
          this.toast.error({ detail: 'Thất bại', summary: 'Có lỗi xảy ra', duration: 4000 })
        }
      })

    }
    catch {

    }
  }

}
