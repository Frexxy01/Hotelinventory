import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, CanMatch, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../login/login.service";
@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate, CanLoad {

  constructor(private loginService : LoginService, private router: Router) {

  }

  canLoad(route: Route, ): MaybeAsync<GuardResult> {
    return this.loginService.isLoggedIn? true : this.router.navigate(['/login'])
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.loginService.isLoggedIn? true : this.router.navigate(['/login'])
  
  }

}
