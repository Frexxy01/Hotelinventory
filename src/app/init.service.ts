import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InitService {
  config: any;
  constructor() { }

  init() {
    return true
  }  
}
