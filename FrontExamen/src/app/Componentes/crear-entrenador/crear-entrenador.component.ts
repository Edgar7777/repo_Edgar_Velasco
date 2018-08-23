import { Component, OnInit } from '@angular/core';
import {EntrenadorService} from '../../entrenador.service';
import {Pokemon} from '../../pokemon';
import {Entrenador} from '../../entrenador';
import {Router} from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-crear-entrenador',
  templateUrl: './crear-entrenador.component.html',
  styleUrls: ['./crear-entrenador.component.css']
})
export class CrearEntrenadorComponent implements OnInit {
entrenadorN: Entrenador;
InombreA:string;
IapellidoA:string;
InumeroMedallasA:string;
IfechaNacimientoA:string;
IcampeonActualA:boolean;
IimagenA:string;
  constructor(private serviceEntrenador: EntrenadorService,
    private route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }
  add(): void {
    this.entrenadorN= new Entrenador();
    this.entrenadorN.nombres=this.InombreA;
    this.entrenadorN.apellidos=this.IapellidoA;
    this.entrenadorN.numeroMedallas=this.InumeroMedallasA;
    this.entrenadorN.fechaNacimiento=this.IfechaNacimientoA;
    this.entrenadorN.campeonActual = this.IcampeonActualA;
    this.entrenadorN.imagenes=this.IimagenA;
      this.serviceEntrenador.addEntrenador(this.entrenadorN).subscribe(response => {
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
