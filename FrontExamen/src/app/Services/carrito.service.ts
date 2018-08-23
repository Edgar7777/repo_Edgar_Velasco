import {EventEmitter, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs/index";
import {Pokemon} from "../pokemon";
import {catchError, tap} from "rxjs/internal/operators";
import {Carrito} from '../carrito';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CarritoService {

 //  private urlCarrito = 'http://localhost:1337/carrito';
 //  private  pokemons: Pokemon[]=[];
 //  cambioCantidadPokemons: EventEmitter<number> = new EventEmitter();
 //  cantidad: number = 0;
 //
 //  constructor() { }
 //
 //  emitirCambioCantidad(cantidad: number) {
 //    this.cantidad = cantidad;
 //    this.cambioCantidadPokemons.emit(cantidad);
 //  }
 //
 //  getNumberOfPokemons():  number {
 //   return this.pokemons.length;
 // }
 //
 // getPokemons(): Pokemon[] {
 //    return this.pokemons;
 //  }
 //
 //  addPokemon(pokemon: Pokemon) {
 //    this.pokemons.push(pokemon);
 //  }
 //
 //  deletePokemon(pokemon: Pokemon) {
 //   const index = this.pokemons.indexOf(pokemon);
 //   this.pokemons.splice(index, 1);
 // }
 private urlCarrito = 'http://localhost:1337/carrito';
 constructor(private http: HttpClient) { }

 getAllCarrito (): Observable<Pokemon[]> {
   return this.http.get<Pokemon[]>(this.urlCarrito)
     .pipe(
       catchError(this.handleError('getAllCarrito', []))
     );
 }

 addCarrito (pokemon: Pokemon): Observable<Pokemon> {
   return this.http.post<Pokemon>(this.urlCarrito, pokemon, httpOptions).pipe(
     catchError(this.handleError<Pokemon>('addCarrito'))
   );
 }
 deleteCarrito (pokemonB: Pokemon | number): Observable<Pokemon> {
   const id = typeof pokemonB === 'number' ? pokemonB : pokemonB.id;
   const url = `${this.urlCarrito}/${id}`;
   return this.http.delete<Pokemon>(url, httpOptions).pipe(
     catchError(this.handleError<Pokemon>('deleteCarrito'))
   );
 }
 private handleError<T> (operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {
     console.error(error); // log to console instead
     this.log(`${operation} failed: ${error.message}`);
     // Let the app keep running by returning an empty result.
     return of(result as T);
   };
 }

 private log(message: string) {

 }
}
