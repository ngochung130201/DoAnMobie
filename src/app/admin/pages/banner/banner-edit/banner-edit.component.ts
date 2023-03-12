import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BannerService } from 'src/app/admin/service/banner/banner.service';


@Component({
  selector: 'app-banner-edit',
  templateUrl: './banner-edit.component.html',
  styleUrls: ['./banner-edit.component.scss']
})
export class BannerEditComponent implements OnInit {


  constructor(private _routerAc: ActivatedRoute, private router: Router, private BannerService: BannerService, private toast: NgToastService) { }
  BannerFormEdit: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
    ,
    link: new FormControl(''),
    isStatus: new FormControl(true, Validators.required),
    image: new FormControl('')
  })
  id: string = '';
  ngOnInit(): void {
    this.id = this._routerAc.snapshot.params['id'];
    this.BannerService.getBanner(this.id).subscribe(
      {
        next: (res => {
          this.BannerFormEdit = new FormGroup({
            id: new FormControl(this.id),
            name: new FormControl(res.name),
            image: new FormControl(res.image),
            link: new FormControl(res.link),
            isStatus: new FormControl(res.isStatus)

          })
          console.log(res);
        }),
        error: (err => {
          console.log(err);
        })
      })

  }

  handleEdit() {
    try {
      this.BannerService.updateBanner(this.id, this.BannerFormEdit.value).subscribe({
        next: (res => {
          this.toast.success({ detail: 'Thành công', summary: 'Cập nhật thành công', duration: 4000 })
          this.router.navigate(['/admin/banner']);
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
