import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from '../../../environment/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { AppModule } from '../../app.module';
import { HttpClient, HttpHeaders, HttpRequest, } from '@angular/common/http';
import { Observable, Subject, catchError, map, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [
  ]
  
  error$ : Subject<String> = new Subject<String>()

  getError$ = this.error$.asObservable()

  getRooms$ : Observable<RoomList[]>;

  countRooms$:  Observable<Number> =of(0)

  getRooms2$: Observable<any> = of([])
  
  // header = new HttpHeaders({'token': '123232323234324gdgdg'}) 

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient) {
    console.log("It works!")
    this.config?.apiEndpoint
    console.log("Room service initialized...")
     

    this.getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(
      
      shareReplay(1),
      catchError(err => {
        this.error$.next(err.message);
        console.error('Error fetching rooms:', err);
        return of([]); // Return a fallback value (0) in case of an error
      })
    );

    this.getRooms2$ = this.http.get<RoomList[]>('api/rooms').pipe(
      shareReplay(1),
      map(rooms => rooms.length),
      catchError(err => {
        this.error$.next(err.message);
        console.error('Error fetching rooms:', err);
        return of([]); // Return a fallback value (0) in case of an error
      })
    );


    this.countRooms$ = this.http.get<RoomList[]>('api/rooms').pipe(
      shareReplay(1),
      map(rooms => rooms.length),
      catchError(err => {
        this.error$.next(err.message);
        console.error('Error fetching rooms:', err);
        return of(0); // Return a fallback value (0) in case of an error
      })
    );

  }
 
  getRooms() {
    
    return this.http.get<RoomList[]>('/api/rooms')
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('api/rooms', room)
  }
  editroom(room: RoomList) {
    return this.http.put<RoomList[]>(`api/rooms/${room.roomNumber}`, room)
  }

  deleteRoom(id: string) {
    return this.http.delete<RoomList[]>(`api/rooms/${id}`)
  }
  getPhotos() {
    // const request = this.http.request<Object[]>
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true
      }
    )
    return this.http.request(request)
  }
}


// fetch('https://example.com/api/rooms', {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(room)
// })