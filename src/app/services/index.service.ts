import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Index } from "../models/index";

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  URL = 'http://localhost:3000/api/index';

  selectedIndex: Index = {
    location: '',
    title: '',
    description: ''
  };
  
  index: Index[] | undefined;

  constructor(public http: HttpClient) { }

  getIndex(){
    return this.http.get<Index[]>(this.URL)
  }

  createIndex(index: Index){
    return this.http.post(this.URL, index);
  }

  editIndex(index: Index){
    return this.http.put(`${this.URL}/${index._id}`, index);
  }

  deleteIndex(_id:String){
    return this.http.delete(`${this.URL}/${_id}`)
  }
}
