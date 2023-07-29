import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Pokemon } from '../../entity/pokemon';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})


export class DetailPokemonComponent implements OnInit {

  pokemonDetail : Pokemon|undefined ; 

  constructor(
    private route: ActivatedRoute , 
    private router: Router, 
    private pokemonService : PokemonService ){
  }

  ngOnInit(){
    const pokemonId= this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId).subscribe( response => this.pokemonDetail = response )
    }
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }


  goToEditPokemon(pokemon : Pokemon){ 
    this.router.navigate(['edit-pokemon' , pokemon.id])
  }


  deletePokemon(pokemonId : number){
      this.pokemonService.deletePokemonById(pokemonId).subscribe(
        () => this.goToPokemonList()
      )
  }



}
