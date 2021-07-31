import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Desechables } from "../models/desechables";
import { Organicos } from "../models/organicos";
import { Plasticos } from "../models/plasticos";

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  URL_ABOUT = 'http://localhost:3000/api/about';
  URLcPLASTIC = 'http://localhost:3000/api/about/cplastic';
  URLcORGANIC = 'http://localhost:3000/api/about/corganic';
  URLcDUMP = 'http://localhost:3000/api/about/cdump';
  URLePLASTIC = 'http://localhost:3000/api/about/eplastic';
  URLeORGANIC = 'http://localhost:3000/api/about/eorganic';
  URLeDUMP = 'http://localhost:3000/api/about/edump';
  
  
  selectedPlasticos: Plasticos = {
    material: '',
    uso: ''
  };
  selectedOrganicos: Organicos = {
    material: '',
    uso: ''
  };
  selectedDesechables: Desechables = {
    material: '',
    uso: ''
  };

  plasticos: Plasticos[] | undefined
  organicos: Organicos[] | undefined
  desechables: Desechables[] | undefined

  constructor(public http: HttpClient) { }

  getAbout(){
    const reciclaje = Object.assign(this.http.get<Plasticos[]>(this.URL_ABOUT), this.http.get<Organicos[]>(this.URL_ABOUT), this.http.get<Desechables[]>(this.URL_ABOUT));
    return reciclaje;
  }
  createPlastico(plasticos: Plasticos){
    return this.http.post(this.URLcPLASTIC, plasticos);
  }
  createOrganico(organicos: Organicos){
    return this.http.post(this.URLcORGANIC, organicos);
  }
  createDesechable(desechables: Desechables){
    return this.http.post(this.URLcDUMP, desechables);
  }
  editPlastico(plasticos: Plasticos){
    return this.http.put(`${this.URLePLASTIC}/${plasticos._id}`, plasticos);
  }
  editOrganico(organicos: Organicos){
    return this.http.put(`${this.URLeORGANIC}/${organicos._id}`, organicos);
  }
  editDesechable(desechables: Desechables){
    return this.http.put(`${this.URLeDUMP}/${desechables._id}`, desechables);
  }

}
