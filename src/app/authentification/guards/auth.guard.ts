import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( 
    private authService : AuthService , 
    private router : Router ){

  }
  canActivate() {
    if( this.authService.isLoggedIn){
      return true ; 
    }else{
      this.authService.isLoggedIn=false ; 
      this.router.navigate(['/login']);
      return false;
    }
    
  }
  
}
