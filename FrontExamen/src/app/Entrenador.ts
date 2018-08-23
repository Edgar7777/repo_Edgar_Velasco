import {Pokemon} from "./pokemon";

export class Entrenador {
  id: number;
  nombres:string;
  apellidos :string;
  fechaNacimiento :string;
  numeroMedallas :string;
  campeonActual :boolean;
  imagenes :string;
  pokemons : Pokemon[];
}
