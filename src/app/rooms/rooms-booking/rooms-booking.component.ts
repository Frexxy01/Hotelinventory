import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, pipe } from 'rxjs';

@Component({
  selector: 'hotelinventoryapp-rooms-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.scss'
})
export class RoomsBookingComponent implements OnInit {

  id!: number; 
  id$!: Observable<number>;
  constructor(private router: ActivatedRoute ) {
     this.id$ = this.router.params.pipe(
      map((params) => params['id'])
      //ne használj {} mert elfelejted a return te geci
     )
  }
  ngOnInit(): void {
    // this.id = this.router.snapshot.params['id']
    
    this.router.paramMap.subscribe((params) => {
     console.log(params.get('id'))
  })
  }
}
