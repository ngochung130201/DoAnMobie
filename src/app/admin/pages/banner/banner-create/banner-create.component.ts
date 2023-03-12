import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { BannerService } from 'src/app/admin/service/banner/banner.service';

@Component({
  selector: 'app-banner-create',
  templateUrl: './banner-create.component.html',
  styleUrls: ['./banner-create.component.scss']
})
export class BannerCreateComponent implements OnInit {

  constructor(private router: Router, private BannerService: BannerService, private toast: NgToastService) { }

  ngOnInit(): void {
  }
  BannerFormCreate: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
    ,
    link: new FormControl(''),
    isStatus: new FormControl(true, Validators.required),
    image: new FormControl(''),
    fileImages: new FormControl('')
  })
  formData: FormData = new FormData();

  handleCreate() {

    try {
      this.BannerService.createBanner(this.formData).subscribe({
        next: (item => {
          this.toast.success({ detail: 'Thành công', summary: 'Thêm thành công', duration: 4000 })
          this.router.navigate(['/admin/banner']);
        }),
        error: (err) => {
          console.log(err);
          this.toast.error({ detail: 'Thất bại', summary: 'Có lỗi xảy ra', duration: 4000 })
        }
      })
    } catch (error) {
      console.log(error);
    }
    console.log('das');
  }


}
