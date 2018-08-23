import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Pokemon} from './pokemon';
import { Entrenador } from "./entrenador";
import {catchError, tap} from "rxjs/operators";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private URL ='http://localhost:1337/pokemon';
  private urlBase = 'http://localhost:1337';
  constructor(private http: HttpClient) { }

  getPokemons (): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.URL)
      .pipe(
        catchError(this.handleError('getPokemons', []))
      );
  }

  getPokemonByTrainer(trainer: number){
    const url = `${this.urlBase}/Pokemon?entrenadorId=${trainer}`;
    return this.http.get<Pokemon>(url);
  }
  getPokemonByName(name: string) {
    const url = `${this.urlBase}/Pokemon?nombrePokemon=${name}`;
    return this.http.get<Pokemon[]>(url);
  }
  getPokemonById(id: number): Observable<Pokemon>{
    const url = `${this.urlBase}/Pokemon/${id}`;
    return this.http.get<Pokemon>(url);
  }
  addPokemon (pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.URL, pokemon, httpOptions).pipe(
      tap(),
      catchError(this.handleError<Pokemon>('add pokemon'))
    );
  }
  deletePokemon(pokemonB: Pokemon | number): Observable<Pokemon> {
    const id = typeof pokemonB === 'number' ? pokemonB : pokemonB.id;
    const url = `${this.URL}/${id}`;
    return this.http.delete<Pokemon>(url, httpOptions).pipe(
      catchError(this.handleError<Pokemon>('deleteCluster'))
    );
  }
  updatePokemon (pokemon: Pokemon): Observable<any>  {
    const url = `${this.URL}/${pokemon.id}`;
    return this.http.put(url, pokemon, httpOptions).pipe(
      catchError(this.handleError<any>('updatePokemon'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }
}
