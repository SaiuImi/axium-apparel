import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from './shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsService } from './product-details/product-details.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    MatDialogModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProductDetailsService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
