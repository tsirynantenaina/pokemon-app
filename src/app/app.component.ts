import { Component, OnInit } from '@angular/core';
import { AuthService } from './authentification/auth-service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Liste des Pokemons';
  auth : AuthService ;

  constructor(private authService : AuthService){
  }


  ngOnInit(){
    this.auth  = this.authService;
  }

}
