import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../../entity/pokemon';
import { PokemonService } from '../../service/pokemon.service';


@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit{
    pokemonList: Pokemon[] ;

    constructor(
      private router : Router,
      private pokemonService : PokemonService ){

    }

    ngOnInit(){
      this.pokemonService.getPokemonList().subscribe(response => this.pokemonList = response); //reponse ici c'est liste de pokemon et on l'injecte dans pokemonList
    }
    
    selectPokemon(pokemon: Pokemon){
      this.router.navigate(['/pokemon', pokemon.id]);
    }
}
