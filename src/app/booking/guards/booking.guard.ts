import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import {BookingComponent} from '../booking.component'
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class BookingGuard implements CanDeactivate<unknown> {
  constructor(private _scackBar: MatSnackBar) {}

  canDeactivate(
    component: BookingComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(component.bookingForm.pristine) {
      return component.bookingForm.pristine
    }
    else {
      this._scackBar.open('You have unsaved changes','Discard')
      return false
    }
  }
  
}
