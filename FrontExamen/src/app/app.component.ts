import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "./pokemon.service";
import { EntrenadorService } from "./entrenador.service";
import { Entrenador } from "./entrenador";
import { Pokemon } from "./pokemon";
import { Usuario } from "./Usuario";
import { DatosUsuarioService } from "./Services/datos-usuario.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  booly=false;
  numEnt:number=6;
  numPok:number=6;

  entrenadores: Entrenador[];
  pokemons: Pokemon[];

  constructor(private entrenadorService: EntrenadorService, private pokemonService: PokemonService) {

  }
  ngOnInit() {
    this.getEntrenadores();
    this.getPokemons();
  }
  getEntrenadores(): void {
    this.entrenadorService.getEntrenadores()
      .subscribe(entrenadores => this.entrenadores = entrenadores);
  }
  getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }

  aumentarEntrenadores():number{
    this.numEnt=this.numEnt+5;
    return this.numEnt;
  }

  aumentarPokemons():number{
    this.numPok=this.numPok+5;
    return this.numPok;
  }

}
