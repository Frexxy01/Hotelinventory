import { Inject, Injectable } from '@angular/core';
import { RouteconfigToken } from './routeCongig.service';
import { Routeconfig } from './routeConfig';

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(RouteconfigToken)  private abc: any) { 
    console.log('Congigservice initialized...')
    console.log(this.abc.title)
  }
}
