import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon } from '../entity/pokemon';

@Injectable()
export class PokemonService {

  constructor( private http : HttpClient) { }


  getPokemonList() : Observable<Pokemon[]> { // On utilise Observable puis que le donnees devient asynchrone 
      return this.http.get<Pokemon[]>('api/pokemons').pipe(
        tap((response : Pokemon[]) => console.table(response)), //affichage de reponse en console , response n'est qu'un nom de variable 
        catchError((error) => {
            console.log(error);
            return of([]); // si il ya un error on envoie des tables de pokemon vide  , 'of' peremt de creer un flux de variable
        })
        
      ) 
  }

  getPokemonById( pokemonId : number) : Observable<Pokemon | undefined>{
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe( // `api/pokemons/:id` avec 's' , c'est le route la API simuler 
      tap((response : Pokemon) => console.table(response)), //affichage de reponse en console , response n'est qu'un nom de variable
        catchError((error) => {
            console.log(error);
            return of(undefined); // si il ya un error on envoie un pokemon indefinie
        })
    )
  }

  updatePokemon(pokemon : Pokemon) : Observable<Pokemon | undefined> {
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'}) //on explique qu'on envoi de donnees avec nos requette
      };
      return this.http.put(`api/pokemons` , pokemon , httpOptions).pipe(
        tap((response : any) => console.table(response)), 
        catchError((error) => {
            console.log(error);
            return of(undefined); 
        })
      );
  }


  getPokemonTypeList(){
    return ['Plante' , 'Feu' , 'Insecte' , 'Normal' , 'Electrik' , 'Poison' , 'Fee' , 'Vol' , 'Combat' , 'Psy'];
  }

  deletePokemonById( pokemonId : number) : Observable<any>{
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(  
      tap((response : any) => console.table(response)), 
        catchError((error) => {
            console.log(error);
            return of(undefined); 
        })
    )
  }


  addPokemon(pokemon : Pokemon) : Observable<Pokemon>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'}) //on explique qu'on envoi de donnees avec nos requette
    };
    return this.http.post<Pokemon>(`api/pokemons` , pokemon , httpOptions).pipe(
      tap((response : Pokemon) => console.table(response)), 
      catchError((error) => {
          console.log(error);
          return of(); 
      })
    );
  }

  searchPokemonList(term: string) : Observable<Pokemon[]>{
    if(term.length <= 2){
      return of ([])
    }else{
      return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
        tap((response : Pokemon[]) => console.table(response)), 
        catchError((error) => {
            console.log(error);
            return of([]); 
        })  
      )
    }
  }



}
