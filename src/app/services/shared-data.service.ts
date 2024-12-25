import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  data: Subject<string> = new Subject<string>

  subject$ 

  message$ = new BehaviorSubject<string>('hi')

  constructor() { 
    this.subject$ = this.data.asObservable()
  }

  setData(data: string) {
    this.data.next(data)
  }

  setMessage(message: string){
    this.message$.next(message)
  }
}
