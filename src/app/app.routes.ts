import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContainerComponent } from './container/container.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';
import { RoomsModule } from './rooms/rooms.module';
import { LoginGuard } from './guards/login.guard';
import { CommentGuard } from './comment/guards/comment.guard';

export const routes: Routes = [
  {path: 'employee', component: EmployeeComponent, canActivate: [LoginGuard]},
  {path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule)},
  {path: 'comments', loadComponent: ()=> import('./comment/comment.component').then((m) => m.CommentComponent), resolve: {comments: CommentGuard}},
  {path: 'booking/:roomId', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule)
  // , canActivate: [LoginGuard]
  },
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent},];
