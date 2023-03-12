import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuService } from 'src/app/admin/service/menu/menu.service';
import { TypeMenus } from 'src/app/admin/types/IMenu';

import { MenuDeleteComponent } from '../menu-delete/menu-delete.component';
export type TypeDeleteMenu = {
  id: string,
  name: string
}
@Component({
  selector: 'app-menu-index',
  templateUrl: './menu-index.component.html',
  styleUrls: ['./menu-index.component.scss']
})
export class MenuIndexComponent implements OnInit {

  constructor(public dialog: MatDialog, private MenuService: MenuService) { }

  listMenu: Array<TypeMenus> = [];
  isCheck: boolean = false;
  ngOnInit(): void {
    this.getALL();
  }

  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id: number, name: string): void {
    this.dialog.open(MenuDeleteComponent, {
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
    this.MenuService.getAllMenu().subscribe(data => {
      this.listMenu = data;

      return this.listMenu;
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
      this.MenuService.deleteMenuAll(this.listMenu).subscribe(res => {
        console.log('thanh cong')
      })
      console.log(this.listMenu)
    }
  }
}
