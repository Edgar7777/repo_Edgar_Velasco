import {Component, Input, OnInit} from '@angular/core';
import {EntrenadorService} from '../../entrenador.service';
import {Entrenador} from '../../Entrenador';
@Component({
  selector: 'app-entrenador',
  templateUrl: './entrenador.component.html',
  styleUrls: ['./entrenador.component.css']
})
export class EntrenadorComponent implements OnInit {
  constructor(private entrenadorService:EntrenadorService) {
  }
  @Input() entrenadores : Entrenador[];

  ngOnInit() {
  }
}
