import { NgModule, NgProbeToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './components/detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './directive/border-card.directive';
import { PokemonTypeColorPipe } from './pipe/pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './service/pokemon.service';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './components/edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './components/add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AuthGuard } from '../authentification/guards/auth.guard';


const pokemonRoute: Routes = [
  {path: 'pokemon/add' , component: AddPokemonComponent , canActivate: [AuthGuard]},
  {path: 'edit-pokemon/:id' , component: EditPokemonComponent, canActivate: [AuthGuard]},
  {path: 'pokemons' , component: ListPokemonComponent , canActivate: [AuthGuard]},
  {path: 'pokemon/:id' , component: DetailPokemonComponent , canActivate: [AuthGuard] }, 
];


@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoute)
  ],
  providers: [
    PokemonService,
  ],
})
export class PokemonModule { }
