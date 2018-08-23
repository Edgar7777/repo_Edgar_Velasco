import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Entrenador} from "../../entrenador";
import {EntrenadorService} from "../../entrenador.service";
import {Pokemon} from "../../pokemon";
import {PokemonService} from "../../pokemon.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component implements OnInit {
  entrenador: Entrenador;
  pokemon: Pokemon;
  pokemons: Pokemon[];
  entrenador1:Entrenador;
  IBname:string;
  IMnombres:string;
  IMapellidos:string;
  IMNumeroMedallas:string;
  IMFechaNacimiento:string;
  IMImagenes:string;
  constructor(private rutas:  ActivatedRoute,
              private servicioEntrenador: EntrenadorService,
              private servicioPokemon: PokemonService,
              private _router: Router)
  {
    this.rutas.params.subscribe(params =>{
      this.entrenador = new Entrenador();
      console.log('Esto es lo que muestra en los parametros que envia',params);
      this.servicioEntrenador.getEntrenadorById(params[`id`]).subscribe(entrenador => {
        this.entrenador= entrenador;
        console.log('JSON Entrenador',this.entrenador)
      }),
      this.servicioPokemon.getPokemonByTrainer(params[`id`]).subscribe(pokemon => {
        this.pokemon= pokemon;
        console.log('JSON Pokemon:',this.pokemon)
      })
    })
  }
  EnviarActualizacionUsuario()
  {
    this.entrenador1=new Entrenador();
    const id = +this.rutas.snapshot.paramMap.get('id');
     this.entrenador1.id = id;
  //  this.entrenador1.idEntrenador=this.entrenador.idEntrenador;
    this.entrenador1.nombres=this.IMnombres;
    this.entrenador1.apellidos=this.IMapellidos;
    this.entrenador1.numeroMedallas=this.IMNumeroMedallas;
    this.entrenador1.fechaNacimiento=this.IMFechaNacimiento;

    this.servicioEntrenador.updateEntrenador(this.entrenador1).subscribe(response => {
    })
  }
  ngOnInit() {
  }
}
