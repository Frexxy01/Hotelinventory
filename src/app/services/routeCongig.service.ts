import { InjectionToken } from "@angular/core";
import { Routeconfig } from "./routeConfig";

export const RouteconfigToken = new InjectionToken<Routeconfig>('routecConfig');

// export const RouteConfiguration: Routeconfig = {
//   title: 'Hello mom'
// }