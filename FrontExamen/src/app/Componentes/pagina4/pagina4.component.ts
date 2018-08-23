import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../../pokemon.service";
import {EntrenadorService} from "../../entrenador.service";
import {Pokemon} from "../../pokemon";
import {CarritoService} from "../../Services/carrito.service";
import {DatosUsuarioService} from '../../Services/datos-usuario.service';
import {Usuario} from '../../usuario';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.component.html',
  styleUrls: ['./pagina4.component.css']
})
export class Pagina4Component implements OnInit {
  pokemon: Pokemon;
  pokemons:Pokemon[];
  usuario = new Usuario;
  textoNombre:string;
  textoCorreo:string;
  textoDireccion:string;
  textoTelefono:number;
  valor:number;
  i:number;
  constructor(private rutas:  ActivatedRoute,
              private servicioLibro: PokemonService,
              private servicioCarrito: CarritoService,
              private servicioUsuario: DatosUsuarioService,
              private _router: Router)
  {
    this.rutas.params.subscribe(params =>{
      this.servicioLibro.getPokemonById(params[`id`]).subscribe(pokemon => {
        this.pokemon= pokemon;
      })
    })
  }
  allPokemonsAlCarrito(): void {
    this.servicioCarrito.getAllCarrito();
  }

  deletePokemon(pokemon: Pokemon): void {
    this.pokemons = this.pokemons.filter(h => h !== pokemon);
    this.servicioCarrito.deleteCarrito(pokemon);
  }
  CalculoTotalLibros()
  {
    this.valor=0;
   // this.valor+=this.libros1.
     /* for(this.i=0;this.i<this.libros1.length;this.i++)
    {

    }
*/
    return this.valor;
  }

  ngOnInit() {
    this.allPokemonsAlCarrito()
  }

  actualizar()
  {
    this.usuario=new Usuario();
    this.usuario.id=this.pokemon.id;
    this.usuario.nombre=this.textoNombre;
    this.usuario.correo=this.textoCorreo;
    this.usuario.direccion=this.textoDireccion;
    this.usuario.telefono=this.textoTelefono;

    this.servicioUsuario.updateUsuario(this.usuario).subscribe(response => {
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
