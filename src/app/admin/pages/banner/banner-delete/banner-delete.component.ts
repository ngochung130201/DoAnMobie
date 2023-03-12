import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BannerService } from 'src/app/admin/service/banner/banner.service';
import { TySlider } from 'src/app/admin/types/ISlider';
import { TypeDeleteBanner } from '../banner-index/banner-index.component';


@Component({
  selector: 'app-banner-delete',
  templateUrl: './banner-delete.component.html',
  styleUrls: ['./banner-delete.component.scss']
})
export class BannerDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TypeDeleteBanner, private BannerService: BannerService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {

  }
  id: string = '';
  listBanner: Array<TySlider> = [];

  handleDelete() {
    this.id = this.data.id;

    this.BannerService.deleteBanner(this.id).subscribe(
    )
  }

  reloadCurrentRoute() {
    this.handleDelete()
    let currentUrl = this.router.url;
    this.router.navigateByUrl('http://localhost:4200/admin/banner', { skipLocationChange: true }).then(() => {
      this.toast.success({ detail: 'Thành công', summary: 'Xóa thành công', duration: 4000 })
      this.router.navigate([currentUrl]);
    });
  }


}
