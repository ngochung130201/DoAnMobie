import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { faTruckFast, faShield, faRotateLeft, faGear, faLaptop, faChevronCircleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { TyProductDetail } from './productdetail.type';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { Typeproduct } from '../home/typeHome.type';
import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper';
import { isPlatformBrowser } from '@angular/common';
import { ProductClientService } from '../../services/productClient/product-client.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TypeProducts } from 'src/app/admin/types/TypeProducts';
import { ProductService } from 'src/app/admin/service/product/product.service';
import { OrderClientService } from '../../services/OrderClient/order-client.service';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],

})
export class ProductDetailComponent implements OnInit {

  constructor(private productService: ProductClientService, private _routerAc: ActivatedRoute, private productBE: ProductService

    ,
    private orderService: OrderClientService

  ) { }
  freeShip = faTruckFast;
  faShield = faShield;
  faRoteleLeft = faRotateLeft;
  faGear = faGear;
  faLaptop = faLaptop;
  faRight = faChevronRight;
  isNavigation: boolean = false;
  brandName: string = '';
  brandID: number = 0;
  listProductBrand: Array<TypeProducts> = [];
  ngOnInit(): void {
    this.slug = this._routerAc.snapshot.params['id'];
    this.getProductBySlug(this.slug)
    this.getAllProductBrand()
  }
  listService: Array<TyProductDetail> = [{
    id: '1',
    title: 'Chính sách bán hàng',
    items: [{
      icon: faTruckFast,
      text: 'Miễn phí giao hàng cho đơn hàng từ 800K'
    },
    {
      icon: faShield,
      text: 'Cam kết hàng chính hãng 100%'
    },
    {
      icon: faRotateLeft,
      text: 'Đổi trả trong vòng 10 ngày'
    },

    ]

  },
  {
    id: '2',
    title: 'Dịch vụ khác',
    items: [{
      icon: faGear,
      text: 'Sửa chữa đồng giá 150.000đ.'
    },
    {
      icon: faLaptop,
      text: 'Vệ sinh máy tính, laptop.'
    },
    {
      icon: faShield,
      text: 'Bảo hành tại nhà.'
    },

    ]

  },


  ]
  IsfreeShip: boolean = true;
  listProduct: Array<TypeProducts> = []
  products: Array<TypeProducts> = [];
  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  getProductBySlug(slug: string) {

    this.productBE.getProduct(slug).subscribe({
      next: (pro => {
        this.brandName = pro.brandName;
        this.brandID = pro.brandID;

        this.products.push(pro);




      })
    })
  }
  getAllProductBrand() {
    this.productService.getAllProduct().subscribe(product => {

      this.listProduct = product.products;

      this.listProduct.map(productItem => {

        if (productItem.brandID === this.brandID) {
          this.listProductBrand.push(productItem);
        }

      })



    })
  }
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  showNavigation(): boolean {
    return this.isNavigation = !this.isNavigation;
  }
  setSwiperInstance(swiper: Swiper) {
    // setInterval(() => {
    //   swiper.slideNext();
    // }, 3000);
  }
  slug: string = '';

  OnOrder() {
    console.log(this.products);
    this.products.map(product => {
      this.orderService.createOrder({
        productName: product.name


      }).subscribe({
        next: (res => {
          console.log('thanh cong');
        }),
        error: (err => {
          console.log(err);
        })
      })
    })
  }
}
