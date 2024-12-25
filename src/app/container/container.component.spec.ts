import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerComponent } from './container.component';
import { EmployeeComponent } from '../employee/employee.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { RouteconfigToken } from '../services/routeCongig.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'test-host',
  standalone: true,
  imports: [ContainerComponent, EmployeeComponent],
  template: `
    <hotelinventoryapp-container>
      <hotelinventoryapp-employee></hotelinventoryapp-employee>
    </hotelinventoryapp-container>
  `,
})
class TestHostComponent {}

describe('ContainerComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let containerComponent: ContainerComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestHostComponent,
        ContainerComponent,
        EmployeeComponent,
      ],
      providers: [
        HttpClient,
        HttpHandler,
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
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();

    const containerDebugElement = fixture.debugElement.query(By.directive(ContainerComponent));
    if (!containerDebugElement) {
      throw new Error('ContainerComponent not found in TestHostComponent');
    }
    containerComponent = containerDebugElement.componentInstance;
  });

  it('should create', () => {
    expect(containerComponent).toBeTruthy();
  });
});