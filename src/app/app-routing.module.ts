import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteHeaderComponent } from './shared/site-header/site-header.component';
import { SiteFooterComponent } from './shared/site-footer/site-footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'product-details', component: ProductDetailsComponent, data: {title: 'Product Details'},
    children: [
      { path: '', component: SiteHeaderComponent, outlet: 'site-header' },
      { path: '', component: SiteFooterComponent, outlet: 'site-footer' }
    ]},
  { path: '',
    redirectTo: '',
    pathMatch: 'full',
    children: [
      { path: '', component: SiteHeaderComponent, outlet: 'site-header' },
      { path: '', component: SiteFooterComponent, outlet: 'site-footer' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
