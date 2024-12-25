import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { BookingRoutingModule } from './booking-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, BookingComponent, BookingRoutingModule
  ]
})
export class BookingModule { }
