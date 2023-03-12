import { Component, HostListener, OnInit } from '@angular/core';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { itemFooter } from '../footer/footer.data';
import { menuUp } from './header.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    document.onclick = (args: any): void => {
      if (args.target.tagName === 'BODY') {
        this.closeMenu()
      }
    }
  }
  isMenu: boolean = false;
  menuUp = menuUp;
  authIcon = faUser;
  searchIcon = faSearch;
  bellIcon = faBell;
  menuIcon = faBars;
  cartIcon = faCartShopping;
  isMobieHiden = true;
  faBar = faBars
  handleMenuMoibe() {
    this.isMobieHiden = !this.isMobieHiden;;

  }

  isOpenedList: any;

  openMenu(source: any, isMenu: boolean) {
    this.isMenu = !isMenu;
    if (this.isMenu) {
      this.isOpenedList = source;
    }
    else {
      this.closeMenu()
    }
  }
  closeMenu() {
    this.isOpenedList = -1;
  }

  cates: Array<any> = [
    {
      id: 1,
      name: "All",
      slug: "san-pham",

    },
    {
      id: 2,
      name: "Điện thoại",
      slug: "dien-thoai",

    },
    {
      id: 3,
      name: "Phụ kiện",
      slug: "phu-kien",

    }

  ]

}
