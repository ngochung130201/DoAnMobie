import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BrandService } from 'src/app/admin/service/brand/brand.service';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.scss']
})
export class BrandEditComponent implements OnInit {

  constructor(private _routerAc: ActivatedRoute, private router: Router, private BrandService: BrandService, private toast: NgToastService) { }
  BrandFormEdit: FormGroup = new FormGroup({
    brandID: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),

  })
  brandID: string = '';
  ngOnInit(): void {
    this.brandID = this._routerAc.snapshot.params['id'];
    this.BrandService.getBrand(this.brandID).subscribe({
      next: (res => {
        this.BrandFormEdit = new FormGroup({
          brandID: new FormControl(this.brandID),
          name: new FormControl(res.name),
        })

      }),
      error: (err => {
        console.log(err);
      })
    })
  }

  handleEdit() {
    try {
      this.BrandService.updateBrand(this.brandID, this.BrandFormEdit.value).subscribe({
        next: (res => {
          this.toast.success({ detail: 'Thành công', summary: 'Cập nhật thành công', duration: 4000 })
          this.router.navigate(['/admin/brand']);
        }),
        error: (err) => {
          this.toast.error({ detail: 'Thất bại', summary: `${err.error}`, duration: 4000 })
        }
      })

    }
    catch {

    }
  }

}
