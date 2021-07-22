import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {RestaurantsService} from '../services/restaurants.service';

@Injectable({
  providedIn: 'root'
})
export class LoginToPanelGuard implements CanActivate {
  constructor(private router: Router, private service: RestaurantsService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthenticated().then((auth: boolean) => {
      if (auth) {
        return true;
      } else {
        this.router.navigate(['']);
      }
    });
  }


  isAuthenticated(): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.service.isLoggedIn);
      }, 500);
    });
  }
}
