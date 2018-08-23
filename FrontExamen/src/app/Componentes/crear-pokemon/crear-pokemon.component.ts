import { Component, OnInit } from '@angular/core';
import {Entrenador} from "../../entrenador";
import {Pokemon} from "../../pokemon";
import {EntrenadorService} from "../../entrenador.service";
import {PokemonService} from "../../pokemon.service";
import {Router} from "@angular/router";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-crear-pokemon',
  templateUrl: './crear-pokemon.component.html',
  styleUrls: ['./crear-pokemon.component.css']
})
export class CrearPokemonComponent implements OnInit {
pokemonN:Pokemon;
  nombrePok: string;
  numeroPok:number;
  poder1:string;
  poder2:string;
  fechaCapturaN:string;
  idTrainer:number;
  nivelPok:number;

  constructor(private servicePokemon:PokemonService,
    private route: ActivatedRoute,
    private _router: Router

  ) { }

  ngOnInit() {
  }
  add(): void {
    this.pokemonN= new Pokemon();
    this.pokemonN.numeroPokemon=this.numeroPok;
    this.pokemonN.nombrePokemon=this.nombrePok;
    this.pokemonN.poderEspecialUno=this.poder1;
    this.pokemonN.poderEspecialDos=this.poder2;
    this.pokemonN.fechaCaptura=this.fechaCapturaN;
    this.pokemonN.nivel=this.nivelPok;
    this.pokemonN.entrenadorIdFK = this.idTrainer;

    this.servicePokemon.addPokemon(this.pokemonN).subscribe(response => {
    })
  }

  irAInfo() {
    const url = [
      'home'
    ];
    this._router.navigate(url);
    location.reload(true);
  }

}
