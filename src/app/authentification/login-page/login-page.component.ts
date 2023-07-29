import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  message : string = " Vous etes deconnecte. (pikachu/pikachu)";
  name: string ;
  password : string ;
  isLoggedIn: Boolean ;

  constructor(
    private authService : AuthService ,
    private router : Router){

  }


  ngOnInit(){
    this.isLoggedIn = this.authService.isLoggedIn ; 
  }


  setMessage(){
      if(this.isLoggedIn){
        this.message = "Vous etes connecter" ;
      }else{
        this.message = "Identifiant ou mot de passe incorrecte" ; 
      }
  }


  login(){
    this.message = "Tentative de connexion en cours ..." ; 
    this.authService.login(this.name , this.password).subscribe(
      (isLoggedIn : Boolean ) => 
        { this.setMessage() ;
          if(isLoggedIn){
            this.router.navigate(['/pokemons']);
          }else{
            
            this.router.navigate(['/login']);
          }
        }
    )}


    logout(){
      this.authService.logout();
      this.setMessage();

    }
}
