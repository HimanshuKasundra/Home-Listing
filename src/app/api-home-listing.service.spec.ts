import { TestBed } from '@angular/core/testing';

import { ApiHomeListingService } from './api-home-listing.service';

describe('ApiHomeListingService', () => {
  let service: ApiHomeListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHomeListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
