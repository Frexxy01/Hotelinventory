import { TestBed } from '@angular/core/testing';

import { SharedDataService } from './shared-data.service';

describe('SharedDataService', () => {
  let service: SharedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should emit the message', () => {
      service.setMessage('hello')
      service.message$.subscribe((mes) => {
        expect(mes).toBe('hello')
      })
  })
});
