import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { EntrenadorComponent } from './Componentes/entrenador/entrenador.component';
import { InputSearchComponent } from './Componentes/input-search/input-search.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacturacionComponent } from './Componentes/facturacion/facturacion.component';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routing,appRoutingProviders} from './Rutas/app.routing';
import { HomeComponent } from './Componentes/home/home.component';
import { Pagina2Component } from './Componentes/pagina2/pagina2.component';
import { Pagina3Component } from './Componentes/pagina3/pagina3.component';
import { Pagina4Component } from './Componentes/pagina4/pagina4.component';
//import { FormularioCuentaComponent } from './Componentes/formulario-cuenta/formulario-cuenta.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { CrearEntrenadorComponent } from './Componentes/crear-entrenador/crear-entrenador.component';
import { CrearPokemonComponent } from './Componentes/crear-pokemon/crear-pokemon.component';
import { PokemonComponentComponent } from './pokemon-component/pokemon-component.component';
@NgModule({
  declarations: [
    AppComponent,
    EntrenadorComponent,
    InputSearchComponent,
    FacturacionComponent,
    HomeComponent,
    Pagina2Component,
    Pagina3Component,
    Pagina4Component,
    //FormularioCuentaComponent,
    CrearEntrenadorComponent,
    CrearPokemonComponent,
    PokemonComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    NoopAnimationsModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
