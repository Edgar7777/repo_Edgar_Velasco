import { Component, OnInit , Input} from '@angular/core';
import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrls: ['./pokemon-component.component.css']
})
export class PokemonComponentComponent implements OnInit {

  @Input() pokemon: Pokemon;
    constructor(private _router: Router,) { }

    ngOnInit() {
    }

    ir(){
      const url = ['pokemon/',this.pokemon.id];
      this._router.navigate(url);
    }

}
