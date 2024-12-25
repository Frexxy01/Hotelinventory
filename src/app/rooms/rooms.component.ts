import { AfterContentChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild, AfterViewChecked, ViewChildren, QueryList, OnDestroy, SkipSelf, Inject } from '@angular/core';
import { RoomList, Rooms } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, of } from 'rxjs';
import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { catchError, map, share, shareReplay } from 'rxjs/operators';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'hotelinventoryapp-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, RouterOutlet, ReactiveFormsModule],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  roomSelected: RoomList | null = null;
  hotelname: string = 'Hiltonhotel';
  numberOfRooms: number = 10;
  hideRooms: boolean = true;
  title: string = ''

  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  })

   

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponene!: QueryList<HeaderComponent>

  totalBytes = 0

  priceFilter = new FormControl(0)

  toggle() {
    this.hideRooms = !this.hideRooms
    this.title = 'Changes have been made!'
    console.log(this.title)
  }
  hasAvailableRooms() {
    return (this.rooms.availableRooms !== undefined) && (this.rooms.availableRooms > 0)
  }

  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 1,
    bookedRooms: 5
  }
  roomList: RoomList[] = []

  subscription !: Subscription;


  rooms$! : Observable<RoomList[]>

  error$! : Observable<String>;

  roomCount$ !: any;

  constructor(@SkipSelf() private roomsService: RoomsService, private configService: ConfigService, private router: Router) {
  }

  ngAfterViewChecked(): void {

  }
  ngDoCheck(): void {
    console.log('Do check!')
  }
  ngOnInit(): void {
      this.error$ = this.roomsService.getError$
    
      this.roomCount$ = this.roomsService.getRooms$.pipe(
        shareReplay(1),
        map((rooms) => rooms.length),
        catchError(err => {
          console.error('Error fetching rooms:', err);
          return of([]); // Return a fallback value (0) in case of an error
        })
      )
  //   a = of(1, 2, 3, 4, 5)
  // .pipe(
  //   map(n => {
  //     if (n === 4) {
  //       throw 'four!';
  //     }
  //     return n;
  //   }),
  //   catchError(err => of('I', 'II', 'III', 'IV', 'V'))
  // )
  // .subscribe(x => console.log(x));
    this.rooms$ = this.roomsService.getRooms$.pipe(
      map((rooms) => this.roomList),
      catchError(err => {
        console.error('Error fetching rooms:', err);
        return of([]); // Return a fallback value (0) in case of an error
      })
    )

    this.subscription = this.rooms$.subscribe((rooms:RoomList[]) => {

      this.roomList = rooms
      console.log(this.roomList)
    })


    // this.rooms$.subscribe(
    //   rooms => console.log(rooms),
    //   err => console.log("Error", err)
    // )
    


    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log("Request has been made.")
          break
        }
        case HttpEventType.ResponseHeader: {
          console.log("Responseheader has been recived!")
          break
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break
        }
        case HttpEventType.Response: {
          console.log("Request Completed!")
          console.log(event.body)
          break
        }
      }
    })

    this.stream.subscribe({
      next: (value) => { console.log(value) },
      complete: () => { console.log('complete') },
      error: (err) => { console.log('Error:', err) }
    }
    )

    this.stream.subscribe((data) => {
      console.log(data)
    })
    this.subscription = this.roomsService.getRooms$.subscribe((rooms: RoomList[]) => {
      this.roomList = rooms
      console.log(rooms)
    })
  }


  ngAfterViewInit(): void {
    console.log('ViewINit!')
  }

  selectParentRoom(room: RoomList) {
    console.log(room)
    console.log("This Works!")
    this.roomSelected = room;
  }
  addRoom() {
    console.log('Adding!')
    this.router.navigate(['rooms','add'])
  }
  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Edited Room',
      amenities: 'Air Conditioner, Kithen, Bathroom',
      price: 10000,
      photos: 'No photos',
      checkinTime: new Date('11-Nov-2024'),
      checkoutTime: new Date('13-Nov-2025'),
      rating: 3.54
    }
    this.roomsService.editroom(room).subscribe((data) => {
      console.log('editroom is called..')
      this.roomList = data
    })
  }
  deleteRoom() {
    this.roomsService.deleteRoom('3').subscribe((data) => {
      console.log('deleteroom is called...')
      console.log(this.roomList.length)
      this.roomList = data
      console.log(this.roomList.length)
    })
  }

  ngOndestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
} 




