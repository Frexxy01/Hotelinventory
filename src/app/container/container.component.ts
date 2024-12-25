import { AfterContentInit, Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hotelinventoryapp-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements OnInit, AfterContentInit{

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent 



  constructor() {

  }
  ngOnInit(): void {
    
  }
  ngAfterContentInit(): void {
    this.employee.empName = 'Béla'
  }
}
