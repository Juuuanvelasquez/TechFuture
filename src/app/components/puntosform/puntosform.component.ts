import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PuntosService } from "../../services/puntos.service";

@Component({
  selector: 'app-puntosform',
  templateUrl: './puntosform.component.html',
  styleUrls: ['./puntosform.component.css']
})
export class PuntosformComponent implements OnInit {

  constructor(public puntosService: PuntosService) { }

  ngOnInit(): void {
  }

  addPunto(form: NgForm){
    if(form.value._id){
      this.puntosService.editPuntos(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    } else{
      this.puntosService.createPuntos(form.value).subscribe(
        res => {
          console.log(res)
          form.reset();
        },
        err => console.error(err)
      );
    }
  }

}
