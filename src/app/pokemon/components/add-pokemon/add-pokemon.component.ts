import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../entity/pokemon';
import { PokemonService } from '../../service/pokemon.service';


@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit{
  pokemon : Pokemon ;
  pokemonTypes : string[];
  constructor(private pokemonService : PokemonService){

  }
  ngOnInit(){
    this.pokemon = new Pokemon(0 , 0 , '' , 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png' , ['Normal'] , new Date);//pokemon vierge pour formulaire vierge
    this.pokemonTypes = this.pokemonService.getPokemonTypeList();
  }



  
}
