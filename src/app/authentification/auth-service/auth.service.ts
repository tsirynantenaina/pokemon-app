import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, of , tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn : boolean = false ;
  constructor(private router : Router){ }


  login( name : string , password : string ) : Observable <boolean>{
    const isLoggedIn = (name == 'pikachu' && password == 'pikachu' ); //return true si name == pikachu et mdp = pikachu
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    );
  }


  logout() {
    this.isLoggedIn = false ;
    this.router.navigate(['/login']);
  }

}
