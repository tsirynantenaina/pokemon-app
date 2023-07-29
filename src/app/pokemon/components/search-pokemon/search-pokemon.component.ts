import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { Pokemon } from '../../entity/pokemon';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit{

 // {....."a"...."ab"...."abz"....."ab"..."abc"...}
  searchTerms = new Subject<string>();
  pokemon$ : Observable<Pokemon[]> ;


  constructor( 
    private router : Router ,
    private pokemonService : PokemonService
  ){ }


  ngOnInit(){
    this.pokemon$ = this.searchTerms.pipe(
      
    // {....."a"...."ab"...."abz"....."ab"..."abc"...}
      debounceTime(300),
      
    // {....."ab"........."ab"..."abc"...}
      distinctUntilChanged(),

      // {....."ab"............"abc"...}

      switchMap((term) => this.pokemonService.searchPokemonList(term))
      // {.....observable<"ab">............pokemonList<"abc">...}
      
      // concatMap , switchMap , mergeMap 

    );
  }

  search(term : string){
      this.searchTerms.next(term);
  }

  goToDetail(pokemon : Pokemon){
    this.router.navigate(['/pokemon' , pokemon.id]);
  }




}
