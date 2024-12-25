import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomGuard } from './guards/room.guard';

const routes: Routes = [
  // default route for `/rooms`
  
  { path: '', component: RoomsComponent,
    canActivateChild: [RoomGuard],
   children: [
    { path: 'add', component: RoomsAddComponent }
  ] },
  { path: ':roomId', loadChildren: () => import('../booking/booking.module').then(m => m.BookingModule) }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
