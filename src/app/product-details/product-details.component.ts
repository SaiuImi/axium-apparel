import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsService } from './product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [DatePipe]
})
export class ProductDetailsComponent implements OnInit {
  productId: number;
  productDetail: object;
  userReviews: Array<object>;
  reviewForm;
  userRate = 0;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private productDetailsService: ProductDetailsService,
    private activeRoute: ActivatedRoute
  ) {
    this.reviewForm = this.formBuilder.group({
      title: '',
      content: ''
    });
  }

  ngOnInit() {
    this.productId = this.activeRoute.snapshot.params.id;
    this.productDetail = this.productDetailsService.getProductDetails(this.productId);
    this.userReviews = this.productDetailsService.getUserReviews(this.productId);
  }

  openDialog(ref, width, height) {
    this.dialog.open(ref, {
      width: width + 'px',
      height: height + 'px'
    });
  }

  onRate(event: {newValue: number}, formData) {
    this.userRate = event.newValue;
  }

  isReviewValid(formData) {
    if (!formData.title || !formData.title.trim()
        || !formData.content || !formData.content.trim() || this.userRate === 0) {
      return false;
    } else {
      return true;
    }
  }

  onSubmitReview(formData) {
    if (this.isReviewValid(formData)) {
      formData.userName = 'Dummy'; // no login functioning so mock
      formData.date = new Date();
      formData.rate = this.userRate;
      this.userReviews.push(formData);
      this.userRate = 0;
      this.reviewForm.reset();
    }
  }
}
