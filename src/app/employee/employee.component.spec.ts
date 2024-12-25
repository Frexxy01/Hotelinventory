import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { RouteconfigToken } from '../services/routeCongig.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeComponent],
      providers: [HttpClient, HttpHandler,
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

    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
