import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from '../pokemon/entity/mock-pokemon';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    const pokemons = POKEMONS; 
    return { pokemons } ; //on ne peut pas directement assigner un classe par exemple return {POKEMONS } mais toujours passer par d'autre variables 
  }
}
