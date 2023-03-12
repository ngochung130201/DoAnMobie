import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { MenuService } from 'src/app/admin/service/menu/menu.service';

@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.scss']
})
export class MenuCreateComponent implements OnInit {

  constructor(private router: Router, private MenuService: MenuService, private toast: NgToastService) { }

  ngOnInit(): void {
  }
  menuFormCreate: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
    ,
    link: new FormControl(''),
    isStatus: new FormControl(true, Validators.required),
    description: new FormControl('')
  })
  handleCreate() {
    try {
      this.MenuService.createMenu(this.menuFormCreate.value).subscribe({
        next: (item => {
          this.toast.success({ detail: 'Thành công', summary: 'Thêm thành công', duration: 4000 })
          this.router.navigate(['/admin/menu']);
        }),
        error: (err) => {
          this.toast.error({ detail: 'Thất bại', summary: 'Có lỗi xảy ra', duration: 4000 })
        }
      })
    } catch (error) {
      console.log(error);
    }
    console.log('das');
  }
}
