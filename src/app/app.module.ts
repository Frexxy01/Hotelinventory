import { ErrorHandler, NgModule } from "@angular/core";
import { APP_CONFIG, APP_SERVICE_CONFIG } from "./AppConfig/appconfig.service";
import { BookingModule } from './booking/booking.module';
import { RouteconfigToken } from "./services/routeCongig.service";
import { GlobalErrorHandler } from "./errorHandler.service";



@NgModule({
  providers: [
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }

  ],
  imports: [
    BookingModule
  ]
}) 

export class AppModule {}