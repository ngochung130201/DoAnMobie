import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { LightgalleryModule } from 'lightgallery/angular';
import { SwiperModule } from 'swiper/angular';
import { ClientRoutingModule } from './client/client-routing.module'


import { HeaderComponent } from './client/components/header/header.component';
import { FooterComponent } from './client/components/footer/footer.component';
import { ButtonComponent } from './client/components/button/button.component';
import { CarouselComponent } from './client/components/carousel/carousel.component';
import { TabsComponent } from './client/components/tabs/tabs.component';
import { CartComponent } from './client/pages/cart/cart.component';
import { HomeComponent } from './client/pages/home/home.component';
import { ProductComponent } from './client/pages/product/product.component';
import { ProductDetailComponent } from './client/pages/product-detail/product-detail.component';
import { PromoComponent } from './client/pages/promo/promo.component';
import { ErrorPageComponent } from './client/pages/error-page/error-page.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { FooterAdminComponent } from './admin/layouts/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './admin/layouts/header-admin/header-admin.component';
import { SidebarAdminComponent } from './admin/layouts/sidebar-admin/sidebar-admin.component';
import { ProductAdminComponent } from './admin/pages/product/product-admin/product-admin.component';
import { ProductCreateComponent } from './admin/pages/product/product-create/product-create.component';
import { ProductEditComponent } from './admin/pages/product/product-edit/product-edit.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { ProductDeleteComponent } from './admin/pages/product/product-delete/product-delete.component';

import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrandDeleteComponent } from './admin/pages/brand/brand-delete/brand-delete.component';
import { BrandCreateComponent } from './admin/pages/brand/brand-create/brand-create.component';
import { BrandEditComponent } from './admin/pages/brand/brand-edit/brand-edit.component';
import { BrandIndexComponent } from './admin/pages/brand/brand-index/brand-index.component';
import { CartIndexComponent } from './admin/pages/cart/cart-index/cart-index.component';
import { CartDeleteComponent } from './admin/pages/cart/cart-delete/cart-delete.component';
import { CartDetailComponent } from './admin/pages/cart/cart-detail/cart-detail.component';
import { StatisticsIndexComponent } from './admin/pages/statistics/statistics-index/statistics-index.component';
import { CategoryIndexComponent } from './admin/pages/category/category-index/category-index.component';
import { CategoryEditComponent } from './admin/pages/category/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './admin/pages/category/category-delete/category-delete.component';
import { CategoryCreateComponent } from './admin/pages/category/category-create/category-create.component';
import { ReviewIndexComponent } from './admin/pages/review/review-index/review-index.component';
import { ReviewDeleteComponent } from './admin/pages/review/review-delete/review-delete.component';
import { ReviewDetailComponent } from './admin/pages/review/review-detail/review-detail.component';
import { BlogDetailComponent } from './admin/pages/blog/blog-detail/blog-detail.component';
import { BlogCreateComponent } from './admin/pages/blog/blog-create/blog-create.component';
import { BlogEditComponent } from './admin/pages/blog/blog-edit/blog-edit.component';
import { BlogDeteleComponent } from './admin/pages/blog/blog-detele/blog-detele.component';
import { ContactComponent } from './admin/pages/contact/contact/contact.component';
import { ContactDeleteComponent } from './admin/pages/contact/contact-delete/contact-delete.component';
import { ContactDetailComponent } from './admin/pages/contact/contact-detail/contact-detail.component';
import { MenuCreateComponent } from './admin/pages/menu/menu-create/menu-create.component';
import { MenuEditComponent } from './admin/pages/menu/menu-edit/menu-edit.component';
import { MenuDeleteComponent } from './admin/pages/menu/menu-delete/menu-delete.component';
import { ProfileIndexComponent } from './admin/pages/profile/profile-index/profile-index.component';
import { BlogIndexComponent } from './admin/pages/blog/blog-index/blog-index.component';
import { MenuIndexComponent } from './admin/pages/menu/menu-index/menu-index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { BannerIndexComponent } from './admin/pages/banner/banner-index/banner-index.component';
import { BannerCreateComponent } from './admin/pages/banner/banner-create/banner-create.component';
import { BannerEditComponent } from './admin/pages/banner/banner-edit/banner-edit.component';
import { BannerDeleteComponent } from './admin/pages/banner/banner-delete/banner-delete.component';
import { SuppliersIndexComponent } from './admin/pages/suppliers/suppliers-index/suppliers-index.component';
import { SuppliersCreateComponent } from './admin/pages/suppliers/suppliers-create/suppliers-create.component';
import { SuppliersEditComponent } from './admin/pages/suppliers/suppliers-edit/suppliers-edit.component';
import { SuppliersDeleteComponent } from './admin/pages/suppliers/suppliers-delete/suppliers-delete.component';
import { ProductCategoryIndexComponent } from './admin/pages/productCategory/product-category-index/product-category-index.component';
import { ProductCategoryCreateComponent } from './admin/pages/productCategory/product-category-create/product-category-create.component';
import { ProductCategoryEditComponent } from './admin/pages/productCategory/product-category-edit/product-category-edit.component';
import { ProductCategoryDeleteComponent } from './admin/pages/productCategory/product-category-delete/product-category-delete.component';
import { CurrencyPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './client/pages/login/login.component';
import { LoginadminComponent } from './admin/pages/loginadmin/loginadmin/loginadmin.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgbAlertModule, NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './client/pages/blog/blog.component';
import { BlogDetailsComponent } from './client/pages/blog-details/blog-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    ButtonComponent,
    CarouselComponent,
    TabsComponent,
    CartComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    PromoComponent,
    ErrorPageComponent,
    AdminHomeComponent,
    DashboardComponent,
    FooterAdminComponent,
    HeaderAdminComponent,
    SidebarAdminComponent,
    ProductAdminComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    BrandDeleteComponent,
    BrandCreateComponent,
    BrandEditComponent,
    BrandIndexComponent,
    CartIndexComponent,
    CartDeleteComponent,
    CartDetailComponent,
    StatisticsIndexComponent,
    CategoryIndexComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    CategoryCreateComponent,
    ReviewIndexComponent,
    ReviewDeleteComponent,
    ReviewDetailComponent,
    BlogDetailComponent,
    BlogCreateComponent,
    BlogEditComponent,
    BlogDeteleComponent,
    ContactComponent,
    ContactDeleteComponent,
    ContactDetailComponent,
    MenuCreateComponent,
    MenuEditComponent,
    MenuDeleteComponent,
    ProfileIndexComponent,
    BlogIndexComponent,
    MenuIndexComponent,
    BannerIndexComponent,
    BannerCreateComponent,
    BannerEditComponent,
    BannerDeleteComponent,
    SuppliersIndexComponent,
    SuppliersCreateComponent,
    SuppliersEditComponent,
    SuppliersDeleteComponent,
    ProductCategoryIndexComponent,
    ProductCategoryCreateComponent,
    ProductCategoryEditComponent,
    ProductCategoryDeleteComponent,
    LoginadminComponent,
    BlogDetailsComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule,
    LightgalleryModule,
    SwiperModule,
    NgbCarouselModule,
    ClientRoutingModule,
    AdminRoutingModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
    MatSelectModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    NgbModule


  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
