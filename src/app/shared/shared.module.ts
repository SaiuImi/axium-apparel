import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';



@NgModule({
  declarations: [SiteHeaderComponent, SiteFooterComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
