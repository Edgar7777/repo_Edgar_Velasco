import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute} from "@angular/router";
import {Usuario} from "../../Usuario";
import {Entrenador} from '../../entrenador';
import {DatosUsuarioService} from "../../Services/datos-usuario.service";
import {EntrenadorService} from "../../entrenador.service";

@Component({
  selector: 'app-formulario-cuenta',
  templateUrl: './formulario-cuenta.component.html',
  styleUrls: ['./formulario-cuenta.component.css']
})
export class FormularioCuentaComponent implements OnInit {
  entrenador : Entrenador;
  constructor(private rutas:  ActivatedRoute,
              private entrenadorService: EntrenadorService)
  {
    this.rutas.params.subscribe(params =>{
      this.entrenador = new Entrenador();
      this.entrenadorService.getEntrenadorById(params[`id`]).subscribe(entrenador1 => {
        this.entrenador= entrenador1;
      })
    })
  }

  ngOnInit() {
  }

}
