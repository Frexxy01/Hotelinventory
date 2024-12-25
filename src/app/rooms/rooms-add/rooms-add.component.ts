import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'hotelinventoryapp-rooms-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.scss'
})
export class RoomsAddComponent {

  room : RoomList = {
    roomType: '',
    amenities: '', 
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
  }
  constructor(private roomsService: RoomsService) {

  }
  successMessage: string = '';
  AddRoom(roomsForm: NgForm) {
    this.roomsService.addRoom(this.room).subscribe((data) => {
      this.successMessage = "Room successfully added!"
      roomsForm.resetForm({
        roomType: 'Type',
        amenities: '', 
        checkinTime: new Date(),
        checkoutTime: new Date(),
        photos: '',
        price: 0,
        rating: 0,
      });
    })
  }
}
