import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsBookingComponent } from './rooms-booking.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('RoomsBookingComponent', () => {
  let component: RoomsBookingComponent;
  let fixture: ComponentFixture<RoomsBookingComponent>;

  const activatedRouteMock = {
    params: of({ id: '123' }) ,
    paramMap: of({
      get: (key: string) => {
        if (key === 'id') return '123'; // Mocking the 'id' parameter
        return null;
      },
    } as ParamMap),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsBookingComponent, BrowserAnimationsModule],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock }, // Mock ActivatedRoute
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
