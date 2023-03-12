import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ErrorPageComponent } from '../client/pages/error-page/error-page.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BannerCreateComponent } from './pages/banner/banner-create/banner-create.component';
import { BannerEditComponent } from './pages/banner/banner-edit/banner-edit.component';
import { BannerIndexComponent } from './pages/banner/banner-index/banner-index.component';
import { BlogCreateComponent } from './pages/blog/blog-create/blog-create.component';
import { BlogDetailComponent } from './pages/blog/blog-detail/blog-detail.component';
import { BlogEditComponent } from './pages/blog/blog-edit/blog-edit.component';
import { BlogIndexComponent } from './pages/blog/blog-index/blog-index.component';
import { BrandCreateComponent } from './pages/brand/brand-create/brand-create.component';
import { BrandEditComponent } from './pages/brand/brand-edit/brand-edit.component';
import { BrandIndexComponent } from './pages/brand/brand-index/brand-index.component';
import { CartDetailComponent } from './pages/cart/cart-detail/cart-detail.component';
import { CartIndexComponent } from './pages/cart/cart-index/cart-index.component';
import { CategoryCreateComponent } from './pages/category/category-create/category-create.component';
import { CategoryEditComponent } from './pages/category/category-edit/category-edit.component';
import { CategoryIndexComponent } from './pages/category/category-index/category-index.component';
import { ContactDetailComponent } from './pages/contact/contact-detail/contact-detail.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { LoginadminComponent } from './pages/loginadmin/loginadmin/loginadmin.component';

import { MenuCreateComponent } from './pages/menu/menu-create/menu-create.component';
import { MenuEditComponent } from './pages/menu/menu-edit/menu-edit.component';
import { MenuIndexComponent } from './pages/menu/menu-index/menu-index.component';
import { ProductAdminComponent } from './pages/product/product-admin/product-admin.component';
import { ProductCreateComponent } from './pages/product/product-create/product-create.component';
import { ProductEditComponent } from './pages/product/product-edit/product-edit.component';
import { ProductCategoryCreateComponent } from './pages/productCategory/product-category-create/product-category-create.component';
import { ProductCategoryEditComponent } from './pages/productCategory/product-category-edit/product-category-edit.component';
import { ProductCategoryIndexComponent } from './pages/productCategory/product-category-index/product-category-index.component';
import { ProfileIndexComponent } from './pages/profile/profile-index/profile-index.component';
import { ReviewDetailComponent } from './pages/review/review-detail/review-detail.component';
import { ReviewIndexComponent } from './pages/review/review-index/review-index.component';
import { StatisticsIndexComponent } from './pages/statistics/statistics-index/statistics-index.component';
import { SuppliersCreateComponent } from './pages/suppliers/suppliers-create/suppliers-create.component';
import { SuppliersEditComponent } from './pages/suppliers/suppliers-edit/suppliers-edit.component';
import { SuppliersIndexComponent } from './pages/suppliers/suppliers-index/suppliers-index.component';



const routes: Routes = [
  {
    path: 'admin',
    component: LoginadminComponent

  },
  {
    path: 'admin/Home',
    component: AdminHomeComponent

  }
  ,
  {
    path: 'admin/product',
    component: ProductAdminComponent


  }
  ,
  {
    path: 'admin/product/create',
    component: ProductCreateComponent


  },
  {
    path: 'admin/product/edit/:id',
    component: ProductEditComponent


  },
  // end router product

  {
    path: 'admin/brand',
    component: BrandIndexComponent


  }
  ,
  {
    path: 'admin/brand/create',
    component: BrandCreateComponent


  },
  {
    path: 'admin/brand/edit/:id',
    component: BrandEditComponent


  },

  // end router brand
  // cart

  {
    path: 'admin/cart',
    component: CartIndexComponent


  }
  ,
  {
    path: 'admin/cart/detail',
    component: CartDetailComponent


  },

  // end cart
  // thong ke
  {
    path: 'admin/statistics',
    component: StatisticsIndexComponent


  },
  // end thong ke
  // danh muc
  {
    path: 'admin/category',
    component: CategoryIndexComponent


  }
  ,
  {
    path: 'admin/category/create',
    component: CategoryCreateComponent


  },
  {
    path: 'admin/category/edit',
    component: CategoryEditComponent

  },
  // end category
  // blog
  {
    path: 'admin/blog',
    component: BlogIndexComponent


  }
  ,
  {
    path: 'admin/blog/create',
    component: BlogCreateComponent


  },
  {
    path: 'admin/blog/edit',
    component: BlogEditComponent

  },
  {
    path: 'admin/blog/detail',
    component: BlogDetailComponent

  },
  // end blog
  // review
  {
    path: 'admin/comments',
    component: ReviewIndexComponent


  }
  ,
  {
    path: 'admin/comments/detail',
    component: ReviewDetailComponent


  },
  // end review
  // contact
  {
    path: 'admin/contact',
    component: ContactComponent


  }
  ,
  {
    path: 'admin/contact/detail',
    component: ContactDetailComponent


  },
  // end contact
  // menu
  {
    path: 'admin/menu',
    component: MenuIndexComponent


  }
  ,
  {
    path: 'admin/menu/create',
    component: MenuCreateComponent


  },
  {
    path: 'admin/menu/edit/:id',
    component: MenuEditComponent

  },
  // end menu
  // banner
  {
    path: 'admin/banner',
    component: BannerIndexComponent


  }
  ,
  {
    path: 'admin/banner/create',
    component: BannerCreateComponent


  },
  {
    path: 'admin/banner/edit/:id',
    component: BannerEditComponent

  },
  // end banner
  // profile
  {
    path: 'admin/profile',
    component: ProfileIndexComponent


  }
  ,
  // danh muc san pham
  {
    path: 'admin/productCategory',
    component: ProductCategoryIndexComponent


  }
  ,
  {
    path: 'admin/productCategory/create',
    component: ProductCategoryCreateComponent


  },
  {
    path: 'admin/productCategory/edit/:slug',
    component: ProductCategoryEditComponent

  },
  // end danh muc san pham
  // nhà cung cấp
  {
    path: 'admin/suppliers',
    component: SuppliersIndexComponent


  }
  ,
  {
    path: 'admin/suppliers/create',
    component: SuppliersCreateComponent


  },
  {
    path: 'admin/suppliers/edit/:id',
    component: SuppliersEditComponent

  },
  // end nhà cung cấp
  // end profile
  {
    path: '**', pathMatch: "full",
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
