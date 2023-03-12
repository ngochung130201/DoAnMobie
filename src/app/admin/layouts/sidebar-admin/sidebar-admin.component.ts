import { Component, OnInit } from '@angular/core';
import { faApple, faBlogger } from '@fortawesome/free-brands-svg-icons';
import { faCalculator, faCartShopping, faComment, faInfo, faLaptop, faPhone, faRightFromBracket, faSquareCaretDown, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';
export interface TyMenuSidebar {
  icon: IconDefinition;
  name: string;
  url: string;
}
@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})

export class SidebarAdminComponent implements OnInit {

  constructor() { }

  MenuSideBar: Array<TyMenuSidebar> = [
    {
      icon: faLaptop,
      name: 'Dashboard',
      url: '/'
    },
    {
      icon: faLaptop,
      name: 'Sản phẩm',
      url: '/product'
    },
    {
      icon: faLaptop,
      name: 'Danh mục sản phẩm',
      url: '/productCategory'
    },
    {
      icon: faLaptop,
      name: 'Nhà cung cấp',
      url: '/suppliers'
    },
    {
      icon: faApple,
      name: 'Thương hiệu',
      url: '/brand'
    },
    {
      icon: faCartShopping,
      name: 'Giỏ hàng',
      url: '/cart'
    },
    {
      icon: faCalculator,
      name: 'Thống kê',
      url: '/statistics'
    },
    {
      icon: faLaptop,
      name: 'Danh mục',
      url: '/category'
    },
    {
      icon: faBlogger,
      name: 'Bài viết',
      url: '/blog'
    },
    {
      icon: faComment,
      name: 'Bình luận bài viết',
      url: '/comments'
    },
    {
      icon: faPhone,
      name: 'Liên hệ và phản hồi',
      url: '/contact'
    },
    {
      icon: faSquareCaretDown,
      name: 'Menu',
      url: '/menu'
    },
    {
      icon: faSquareCaretDown,
      name: 'Banner',
      url: '/banner'
    },
    {
      icon: faUser,
      name: 'Profile',
      url: '/profile'
    },
    {
      icon: faRightFromBracket,
      name: 'Đăng xuất',
      url: '/logout'
    },
    {
      icon: faInfo,
      name: 'Hỗ trợ',
      url: '/support'
    }
  ]
  ngOnInit(): void {
  }

}
