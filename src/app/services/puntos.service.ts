import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Puntos } from "../models/puntos";

@Injectable({
  providedIn: 'root'
})
export class PuntosService {

  URL_PUNTOS = 'http://localhost:3000/api/points';

  selectedPunto: Puntos = {
    nombre: '',
    direccion: ''
  };
  
  puntos!: Puntos[];

  constructor(public http: HttpClient) { }

  getPuntos(){
    return this.http.get<Puntos[]>(this.URL_PUNTOS)
  }

  createPuntos(puntos: Puntos){
    return this.http.post(this.URL_PUNTOS, puntos);
  }

  editPuntos(puntos: Puntos){
    return this.http.put(`${this.URL_PUNTOS}/${puntos._id}`, puntos);
  }

  deletePuntos(_id:String){
    return this.http.delete(`${this.URL_PUNTOS}/${_id}`);
  }
}
