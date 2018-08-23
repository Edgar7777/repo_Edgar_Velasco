import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Entrenador } from './entrenador';
import { Pokemon } from './pokemon';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EntrenadorService {
private URL ='http://localhost:1337/entrenador';
private urlBase = 'http://localhost:1337';
  constructor(private http: HttpClient) { }

  addEntrenador (entrenador: Entrenador): Observable<Entrenador> {
    return this.http.post<Entrenador>(this.URL, entrenador, httpOptions).pipe(
      tap(),
      catchError(this.handleError<Entrenador>('add entrenador'))
    );
  }
  getEntrenadores (): Observable<Entrenador[]> {
    return this.http.get<Entrenador[]>(this.URL)
      .pipe(
        catchError(this.handleError('getEntrenadores', []))
      );
  }

  getEntrenadorByName(name: string) {
    const url = `${this.urlBase}/Entrenador?nombres=${name}`;
    return this.http.get<Entrenador[]>(url);
  }
  getEntrenadorById(id: number): Observable<Entrenador>{
    const url = `${this.urlBase}/Entrenador/${id}`;
    return this.http.get<Entrenador>(url);
  }
  deleteEntrenador(entrenadorB: Entrenador | number): Observable<Entrenador> {
    const id = typeof entrenadorB === 'number' ? entrenadorB : entrenadorB.id;
    const url = `${this.URL}/${id}`;
    return this.http.delete<Entrenador>(url, httpOptions).pipe(
      catchError(this.handleError<Entrenador>('deleteEntrenador'))
    );
  }
  updateEntrenador (entrenador: Entrenador): Observable<any>  {
    const url = `${this.URL}/${entrenador.id}`;
    return this.http.put(url, entrenador, httpOptions).pipe(
      catchError(this.handleError<any>('updateEntrenador'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      return of(result as T);
    };
  }
}
