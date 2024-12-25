import { TestBed } from '@angular/core/testing';

import { RoomsService } from './rooms.service';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('RoomsService', () => {
  let service: RoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomsService, HttpClient, HttpHandler,
        {
          provide: APP_SERVICE_CONFIG,
          useValue: { 
            // Mock configuration object
            apiUrl: 'http://mock-api-url.com',
            featureEnabled: true
          }
        }
      ]
    });
    service = TestBed.inject(RoomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
