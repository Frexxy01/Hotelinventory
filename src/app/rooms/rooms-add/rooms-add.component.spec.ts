import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsAddComponent } from './rooms-add.component';
import { RoomsService } from '../services/rooms.service';
import { RouteconfigToken } from '../../services/routeCongig.service';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('RoomsAddComponent', () => {
  let component: RoomsAddComponent;
  let fixture: ComponentFixture<RoomsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsAddComponent],
      providers: [RoomsService, HttpClient, HttpHandler,
        {
          provide: APP_SERVICE_CONFIG,
          useValue: 'http://localhost:3000',
        },
        {
          provide: RouteconfigToken,
          useValue: {
            title: 'example'
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
