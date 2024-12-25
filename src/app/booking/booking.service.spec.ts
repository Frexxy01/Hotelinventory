import { TestBed } from '@angular/core/testing';

import { BookingService } from './booking.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('BookingService', () => {
  let service: BookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
      ]
    });
    service = TestBed.inject(BookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
