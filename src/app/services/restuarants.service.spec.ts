import { TestBed } from '@angular/core/testing';

import { RestuarantsService } from './restuarants.service';

describe('RestuarantsService', () => {
  let service: RestuarantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestuarantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
