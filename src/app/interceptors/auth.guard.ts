import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {  
  constructor(public router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var loggedUser=localStorage.getItem('LoggedUser');
      if(loggedUser !='' && loggedUser !=undefined && loggedUser !=null){
        return true;
      }else{
        this.router.navigate(['login']);
        return false;
      }
    return true;
  }
  
}
