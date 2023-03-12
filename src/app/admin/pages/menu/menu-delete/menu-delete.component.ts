import { Type } from '@angular/compiler';
import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { MenuService } from 'src/app/admin/service/menu/menu.service';
import { TypeMenus } from 'src/app/admin/types/IMenu';
import { MenuIndexComponent, TypeDeleteMenu } from '../menu-index/menu-index.component';

@Component({
  selector: 'app-menu-delete',
  templateUrl: './menu-delete.component.html',
  styleUrls: ['./menu-delete.component.scss']
})
export class MenuDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TypeDeleteMenu, private MenuService: MenuService, private router: Router, private toast: NgToastService) { }

  ngOnInit(): void {

  }
  id: string = '';
  listMenu: Array<TypeMenus> = [];

  reloadCurrentRoute() {
    // this.handleDelete()
    let currentUrl = this.router.url;
    this.router.navigateByUrl('http://localhost:4200/admin/menu', { skipLocationChange: true }).then(() => {
      // this.toast.success({ detail: 'Thành công', summary: 'Xóa thành công', duration: 4000 })
      this.router.navigate([currentUrl]);
    });
  }


  handleDelete() {
    this.id = this.data.id;

    this.MenuService.deleteMenu(this.id).subscribe(
      {
        next: (data => {
          this.toast.success({ detail: 'Thành công', summary: 'Xóa thành công', duration: 4000 })
          this.reloadCurrentRoute()
        }),
        error: (err => {

        })
      }

    )
  }

}
