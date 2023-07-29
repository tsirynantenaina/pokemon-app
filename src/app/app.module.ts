import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './memory-service/in-memory-data.service';
import { LoginPageComponent } from './authentification/login-page/login-page.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule , 
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService , {dataEncapsulation: false }),
    PokemonModule, //Module dans pokemon toujours placer avant le Module Principal
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
