import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EntrenadorService} from "../../entrenador.service";
import {Entrenador} from "../../entrenador";
import {Pokemon} from "../../pokemon";
import {PokemonService} from "../../pokemon.service";

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  name: string;
  trainers: Entrenador[];
  pokes: Pokemon[];

  @Output() entrenadores: EventEmitter<Entrenador[]> = new EventEmitter<Entrenador[]>();
  @Output() pokemons: EventEmitter<Pokemon[]> = new EventEmitter<Pokemon[]>();

  constructor(
    private entrenadorService: EntrenadorService,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
  }

  searchData() {
    this.entrenadorService.getEntrenadorByName(this.name)
      .subscribe(
        res => {
          this.trainers = res;
          this.entrenadores.emit(this.trainers);
        }
      ),
    this.pokemonService.getPokemonByName(this.name)
      .subscribe(
        res => {
          this.pokes = res;
          this.pokemons.emit(this.pokes);
        }
      )
  }

}
