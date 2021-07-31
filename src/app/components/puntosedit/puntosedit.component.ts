import { Component, OnInit } from '@angular/core';
import { PuntosService } from "../../services/puntos.service";
import { Puntos } from "../../models/puntos";

@Component({
  selector: 'app-puntosedit',
  templateUrl: './puntosedit.component.html',
  styleUrls: ['./puntosedit.component.css']
})
export class PuntoseditComponent implements OnInit {

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

  deletePuntos(id: String){
    if(confirm('Are you sure you want to delete ir?')){
      this.puntosService.deletePuntos(id).subscribe(
        (res) => {
          this.getPuntos();
        },
        (err) => console.error(err)
      );
    } 
  }

  editPuntos(puntos: Puntos){
    this.puntosService.selectedPunto = puntos;
  }

}
