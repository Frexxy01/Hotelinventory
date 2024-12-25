import { TestBed } from '@angular/core/testing';

import { InitService } from './init.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('InitService', () => {
  let service: InitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(InitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
