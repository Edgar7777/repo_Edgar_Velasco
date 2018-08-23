import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Usuario} from "../../Usuario";
import {DatosUsuarioService} from "../../Services/datos-usuario.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {
  usuario: Usuario;
  usuario11: Usuario[];
  usuario12:Usuario;
  Inombre:string;
  Iapellido:string;
  Icorreo:string;
  Idireccion:string;
  url='http://localhost:1337/Usuario';
  constructor(private rutas:  ActivatedRoute,
              private servicioUsuario: DatosUsuarioService,
              private http: HttpClient)
  {
    this.rutas.params.subscribe(params =>{
      this.usuario = new Usuario();
      this.servicioUsuario.getUsuario(params[`id`]).subscribe(usuario1 => {
        this.usuario= usuario1;
      })
    })
  }
  EnviarActualizacion()
  {
    this.usuario12=new Usuario();
    this.usuario12.nombre=this.Inombre;
    this.usuario12.correo=this.Icorreo;
    this.usuario12.direccion=this.Idireccion;
    this.servicioUsuario.updateUsuario(this.usuario12).subscribe(response => {
    })
  }

  ngOnInit() {
  }

}
