import { Component, OnInit , Input} from '@angular/core';
import {Entrenador} from "../../entrenador";
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../../pokemon.service";
import {Pokemon} from "../../pokemon";
import {CarritoService} from "../../Services/carrito.service";
import {Usuario} from "../../Usuario";

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component implements OnInit {
  pokemon= new Pokemon;
  pokemon1:Pokemon;
  nombrePok: string;
  numeroPok:number;
  poder1:string;
  fechaCap:string;
  poder2:string;
  idTrainer:number;
  nivelPok:number;
  constructor(private rutas:  ActivatedRoute,
              private servicioPokemon: PokemonService,
              private servicioCarrito: CarritoService)
  {
    this.rutas.params.subscribe(params =>{
        this.servicioPokemon.getPokemonById(params[`id`]).subscribe(pokemon => {
          this.pokemon= pokemon;
          console.log('JSON Pokemon:',this.pokemon)
        })
    })
  }
  ngOnInit() {

  }
  addPokemonAlCarrito(){
    console.log('JSON Pokemon aki:',this.pokemon)
    this.servicioCarrito.addCarrito(this.pokemon);
  }

  enviarActualizacion()
  {
    this.pokemon1=new Pokemon();
    this.pokemon1.id=this.pokemon.id;
    this.pokemon1.numeroPokemon=this.numeroPok;
    this.pokemon1.nombrePokemon=this.nombrePok;
    this.pokemon1.poderEspecialUno=this.poder1;
    this.pokemon1.poderEspecialDos=this.poder2;
    this.pokemon1.fechaCaptura=this.fechaCap;
    this.pokemon1.nivel=this.nivelPok;
    this.pokemon1.entrenadorIdFK=this.idTrainer;

    this.servicioPokemon.updatePokemon(this.pokemon1).subscribe(response => {
    })
  }
}
