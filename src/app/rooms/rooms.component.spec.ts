import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';
import { RoomsService } from './services/rooms.service';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { RouteconfigToken } from '../services/routeCongig.service';
import { HttpClient, HttpEventType, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { SharedDataService } from '../services/shared-data.service';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  const mockRoomsService = 
     {
      getRooms$: of([{ id: 1, name: 'Room 1' }, { id: 2, name: 'Room 2' }]), // Simulating room data
      getError$: of(null), 
      getPhotos: jest.fn(() => {
        return of({
          type: HttpEventType.Response,
          body: [{ id: 1, photoUrl: 'photo1.jpg' }, { id: 2, photoUrl: 'photo2.jpg' }],
        }); // Mocking HTTP response
      }),
     }
     // Mock a method returning an observable
  
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsComponent],
      providers: [HttpClient, HttpHandler,SharedDataService,
        {
          provide: RoomsService,
          useValue: mockRoomsService
        },

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

    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should toggle', () => {
    component.toggle()
    expect(component.hideRooms).toBe(false)
  })
});
