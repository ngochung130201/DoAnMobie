import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from '../admin/pages/blog/blog-detail/blog-detail.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CartComponent } from './pages/cart/cart.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductComponent } from './pages/product/product.component';
import { PromoComponent } from './pages/promo/promo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,


  }, {
    path: "san-pham",
    component: ProductComponent,

  },
  {
    path: 'san-pham/:id', component: ProductDetailComponent
  },
  {
    path: 'dang-nhap', component: LoginComponent
  },
  {
    path: 'gio-hang', component: CartComponent
  },
  {
    path: 'tin-tuc', component: BlogComponent
  },
  {
    path: 'tin-tuc/:id', component: BlogDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
