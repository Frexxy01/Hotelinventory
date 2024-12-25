import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // For HttpClient
import { ActivatedRoute } from '@angular/router'; // For ActivatedRoute
import { BookingComponent } from './booking.component'; // Standalone component
import { BookingService } from './booking.service'; // Your service
import { of } from 'rxjs'; // For mocking observables
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  // Mock ActivatedRoute if necessary
  const activatedRouteMock = {
    snapshot: {
      paramMap: {
        get: (key: string) => {
          if (key === 'roomId') return '123'; // Mock the 'roomId' parameter
          return null;
        },
      },
    },
  };


  beforeEach(async () => {

    if (!Element.prototype.animate) {
      Element.prototype.animate = () => {
        return {
          currentTime: 0,
          effect: null,
          finished: Promise.resolve(),
          id: '',
          playState: 'idle',
          pending: false,
          ready: Promise.resolve(),
          timeline: null,
          cancel: () => {},
          finish: () => {},
          play: () => {},
          pause: () => {},
          reverse: () => {},
          updatePlaybackRate: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => false,
        } as unknown as Animation;
      };
    }
  

    await TestBed.configureTestingModule({
      imports: [BookingComponent, HttpClientModule, BrowserAnimationsModule], // Import the standalone component and HttpClientModule
      providers: [
        BookingService, // Provide BookingService
        { provide: ActivatedRoute, useValue: activatedRouteMock } // Mock ActivatedRoute
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger change detection
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Assert that the component is created
  });
});
