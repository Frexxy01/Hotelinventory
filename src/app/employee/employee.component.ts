import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hotelinventoryapp-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers: [RoomsService]
})
export class EmployeeComponent {
  empName: string = 'Steve'

  constructor ( private roomsService: RoomsService) {

  }
}
