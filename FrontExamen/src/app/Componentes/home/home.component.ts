import { Component, OnInit, Input } from '@angular/core';
import {Entrenador} from "../../entrenador";
import {Pokemon} from "../../pokemon";
import {PokemonService} from "../../pokemon.service";
import {EntrenadorService} from "../../entrenador.service";
import {Usuario} from "../../Usuario";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemons : Pokemon[];
  entrenadores: Entrenador[];


  constructor(
    private pokemonService: PokemonService,
    private entrenadorService: EntrenadorService) { }

  DetalleByName(nombre:string): void {
    this.pokemonService.getPokemonByName(nombre).subscribe(data => {
      this.pokemons=data;
    });
    this.entrenadorService.getEntrenadorByName(nombre).subscribe(data1 => {
      this.entrenadores=data1;
    });
  }
  deleteEntrenador(entrenador: Entrenador): void {
    this.entrenadores = this.entrenadores.filter(h => h !== entrenador);
    this.entrenadorService.deleteEntrenador(entrenador).subscribe();
  }
  deletePokemon(pokemon: Pokemon): void {
    this.pokemons = this.pokemons.filter(h => h !== pokemon);
    this.pokemonService.deletePokemon(pokemon).subscribe();
  }

  ngOnInit() {
  }
  }
