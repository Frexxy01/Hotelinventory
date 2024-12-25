import { InjectionToken } from "@angular/core";


export const localstorageToken = new InjectionToken('local storage', {
  providedIn: 'root',
  factory() {
    return localStorage
  } 
})