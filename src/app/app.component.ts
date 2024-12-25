 import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import {NavigationEnd, NavigationStart, Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import {RoomsComponent} from './rooms/rooms.component';
import { CommonModule } from '@angular/common'; 
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from "./employee/employee.component";
import { LoggerService } from './logger.service';
import { localstorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { AppNavComponent } from "./app-nav/app-nav.component";
import { ConfigService } from './services/config.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'hotelinventory-root',
  standalone: true,
  imports: [ CommonModule, AppNavComponent],
  templateUrl: './app.component.html',
  // template: `
  // <!-- Hello from inline template
  // <hotelinventoryapp-rooms></hotelinventoryapp-rooms>
  // `, -->
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  routerLink!: RouterLink;
  title = 'hotelinventoryapp';

  loginType: string = 'admin';

  // @ViewChild('name', {read: ViewContainerRef})  divref! : ViewContainerRef;
  @ViewChild('name', {static: true}) name!: ElementRef
  // @ViewChild(RoomsComponent) roomComponent! : RoomsComponent;

  // @ViewChild('user', {read: ViewContainerRef}) vcr! : ViewContainerRef
  constructor(@Optional() private loggerService: LoggerService,
  @Inject(localstorageToken) private localStorage: Storage,
  private Initservice: InitService, private configService: ConfigService
  ,private router: Router
) {

  }
  // ngAfterViewInit() : void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent)
  //   componentRef.instance.rooms.availableRooms = 50;
  // } 
  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   console.log(event)
    // })

    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log('Navigation started...')
    })

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      console.log('Navigation Completed!')
    })

    

   this.loggerService?.log('This is from loggerservice!')
  //  this.name.nativeElement.innerText = 'Hello  mom!'
   this.localStorage.setItem('name', 'Hilton Hotel')
   console.log(this.localStorage)
   console.log(this.Initservice.config)
  }
}
