import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from "../Componentes/home/home.component";
import {Pagina2Component} from "../Componentes/pagina2/pagina2.component";
import {Pagina3Component} from "../Componentes/pagina3/pagina3.component";
import {Pagina4Component} from "../Componentes/pagina4/pagina4.component";
import {CrearEntrenadorComponent} from "../Componentes/crear-entrenador/crear-entrenador.component";
import {CrearPokemonComponent} from "../Componentes/crear-pokemon/crear-pokemon.component";

const appRoutes:Routes=[
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path: 'paginaD/:id', component: Pagina2Component},
  {path: 'pagina3/:id', component: Pagina3Component},
  {path: 'pagina4/:id', component: Pagina4Component},
  {path: 'crearEntrenador', component: CrearEntrenadorComponent},
  {path: 'crearPokemon', component: CrearPokemonComponent},
  {path:'**',component:HomeComponent}
  ];

export const appRoutingProviders :any[]=[];
export const routing : ModuleWithProviders=RouterModule.forRoot(appRoutes);
