import { TestBed } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouteconfigToken } from './routeCongig.service';

describe('ConfigService', () => {
  let service: ConfigService;

  const activatedRouteMock = of({})
  const mockRoutecConfig = { key: 'mockValue' }; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ConfigService,
        {
          provide: ActivatedRoute, useValue: activatedRouteMock
        },
        { provide: RouteconfigToken, useValue: mockRoutecConfig }
      ]
    });
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
