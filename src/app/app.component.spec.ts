import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { RouteconfigToken } from './services/routeCongig.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
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
      }

    await TestBed.configureTestingModule({
      imports: [AppComponent,BrowserAnimationsModule],
      providers: [InitService, ConfigService ,
        {
          provide: RouteconfigToken,
          useValue: {
            title: 'hotelinventoryapp'
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => null, // Mocking `paramMap.get`
              },
            },
            queryParams: of({}), // Mocking `queryParams` as an observable
          },
        },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }})

  it('should create the app', () => {
   
    expect(component).toBeTruthy();
  });

  it(`should have the 'hotelinventoryapp' title`, () => {

    expect(component.title).toEqual('hotelinventoryapp');
  });
});
