import { APP_INITIALIZER, ApplicationConfig, ErrorHandler, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestInterceptor } from './rooms/request.interceptor';
import { initializeApp } from './initializeappApp';
import { InitService } from './init.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { RouteconfigToken } from './services/routeCongig.service';
import { GlobalErrorHandler } from './errorHandler.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(withInterceptors([requestInterceptor])),
    FormsModule,
    InitService,
      {
        provide: APP_SERVICE_CONFIG,
        useValue: APP_CONFIG
      },
      {
        provide: APP_INITIALIZER,
        useFactory: initializeApp,
        deps: [InitService],
        multi: true
      },
      {
        provide: RouteconfigToken,
        useValue: {
          title: 'example'
        }
      },
      {
        provide: ErrorHandler, 
        useClass: GlobalErrorHandler
      },
      provideAnimationsAsync(), provideAnimationsAsync()
    ]
};
