import {Entrenador} from './Entrenador';
export class Pokemon {
  id : number;
  numeroPokemon : number;
  nombrePokemon : string;
  poderEspecialUno : string;
  poderEspecialDos : string;
  fechaCaptura : string;
  nivel : number;
  entrenadorIdFK: number;
}
