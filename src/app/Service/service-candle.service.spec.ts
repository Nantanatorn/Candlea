import { TestBed } from '@angular/core/testing';

import { ServiceCandleService } from './service-candle.service';

describe('ServiceCandleService', () => {
  let service: ServiceCandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
