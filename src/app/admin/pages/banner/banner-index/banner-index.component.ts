import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BannerService } from 'src/app/admin/service/banner/banner.service';

import { TySlider } from 'src/app/admin/types/ISlider';
import { BannerDeleteComponent } from '../banner-delete/banner-delete.component';
export type TypeDeleteBanner = {
  id: string,
  name: string
}
@Component({
  selector: 'app-banner-index',
  templateUrl: './banner-index.component.html',
  styleUrls: ['./banner-index.component.scss']
})

export class BannerIndexComponent implements OnInit {

  constructor(public dialog: MatDialog, private BannerService: BannerService) { }

  listBanner: Array<TySlider> = [];
  isCheck: boolean = false;
  ngOnInit(): void {
    this.getALL();
  }

  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id: number, name: string): void {
    this.dialog.open(BannerDeleteComponent, {
      width: '250px',
      data:
      {
        id: id,
        name: name,
      }

    });
  }
  // hien thi tat ca
  getALL() {
    this.BannerService.getAllBanner().subscribe(data => {
      this.listBanner = data;

      return this.listBanner;
    })

  }

  //  check
  hanldeCheck(): boolean {
    this.isCheck = !this.isCheck;
    console.log(this.isCheck);
    return this.isCheck;
  }
  hanldeDeleteAll() {

    if (this.isCheck) {
      this.BannerService.deleteBannerAll(this.listBanner).subscribe(res => {
        console.log('thanh cong')
      })
      console.log(this.listBanner)
    }
  }

}
