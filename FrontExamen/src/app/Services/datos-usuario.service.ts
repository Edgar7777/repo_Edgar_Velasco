import { EventEmitter,Injectable } from '@angular/core';
import {Observable, of} from "rxjs/index";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Usuario} from "../Usuario";
import {catchError, tap} from "rxjs/internal/operators";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DatosUsuarioService {

  private url: string = 'http://localhost:1337/entrenador';
  nombreUsuario = '';
  cambioNombreUsuario: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient) { }
  emitirCambioNombreUsuario(nombreUsuario: string) {
   this.nombreUsuario = nombreUsuario;
   this.cambioNombreUsuario.emit(nombreUsuario);
 }

 getUsuario(id: number): Observable<Usuario> {
   const url = `${this.url}/${id}`;
   return this.http.get<Usuario>(url);
 }

 updateUsuario(user: Usuario): Observable<any> {
   const url = `${this.url}/${user.id}`;
   return this.http.put(url, user, httpOptions);
 }
}
