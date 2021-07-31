import { Component, OnInit } from '@angular/core';
import { PuntosService } from "../../services/puntos.service";

@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.css']
})
export class PuntosComponent implements OnInit {

  constructor(public puntosService: PuntosService) { }

  ngOnInit(): void {
    this.getPuntos();
  }
  getPuntos(){
    this.puntosService.getPuntos().subscribe(
      res => {
        this.puntosService.puntos = res;
      },
      err => console.error(err)
    );
  }

}
