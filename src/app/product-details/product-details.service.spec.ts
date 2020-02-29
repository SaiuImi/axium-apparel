import { TestBed } from '@angular/core/testing';

import { ProductDetailsService } from './product-details.service';

describe('PrductDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductDetailsService = TestBed.get(ProductDetailsService);
    expect(service).toBeTruthy();
  });
});
