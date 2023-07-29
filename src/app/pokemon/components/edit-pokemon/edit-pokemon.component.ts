import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../entity/pokemon';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit{

  pokemon : Pokemon | undefined;

  constructor( 
    private route : ActivatedRoute ,
    private pokemonService : PokemonService ){

  }


  ngOnInit(){
    
    const pokemonId = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId).subscribe( response => this.pokemon = response);
    }
  }


}
