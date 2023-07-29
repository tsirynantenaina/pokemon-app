import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../../entity/pokemon';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit{
  @Input() pokemon : Pokemon            // NB:Sans virgule, Lorsqu'on appel le formulaite pokemonForm , passe moi avec un propiete pokemon de type Pokemon 
  pokemonTypes : string[];
  isAddForm : Boolean ; 

  constructor(
    private pokemonService : PokemonService , 
    private router : Router ){
  }


  ngOnInit(){
    //pokemonListType
    this.pokemonTypes= this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add');
  }

  //type cocher par defaut
  hasType( type: string ) : boolean {
    return this.pokemon.types.includes(type); // on regarde si le pokemon passer en parametre se trouve dans le types de pokemon , renvoie true ou false     
  }

  selectedType($event : Event , type : string ){
    const isChecked  = ($event.target as HTMLInputElement).checked;
    if(isChecked){
      this.pokemon.types.push(type); // si cocher ajouter dans le tableau de type liste
    }else{ // sinon on enleve le type dechocher dans le type
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type : string ) : boolean{
    if(this.pokemon.types.length == 1 && this.hasType(type)) {
        return false ; 
    }

    if(this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false ;  
    }

    return true ;
  }


  onSubmit(){
    if(this.isAddForm){
        this.pokemonService.addPokemon(this.pokemon).subscribe(
          (pokemon : Pokemon) => this.router.navigate(['/pokemon' , pokemon.id] )
        );
    }else{
      console.log('form is submit ');
      this.pokemonService.updatePokemon(this.pokemon).subscribe(
        () => {this.router.navigate(['/pokemon' , this.pokemon.id])}
      )
    }
    
    
  }
}
