import { TestBed } from '@angular/core/testing';

import { SellerserService } from './sellerser.service';

describe('SellerserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellerserService = TestBed.get(SellerserService);
    expect(service).toBeTruthy();
  });
});
