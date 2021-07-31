import { Component, OnInit } from '@angular/core';
import {  IndexService } from '../../services/index.service';
import { Index } from "../../models/index";

@Component({
  selector: 'app-indexedit',
  templateUrl: './indexedit.component.html',
  styleUrls: ['./indexedit.component.css']
})
export class IndexeditComponent implements OnInit {

  constructor(public indexService: IndexService) { }

  ngOnInit(): void {
    this.getIndex();
  }

  getIndex(){
    this.indexService.getIndex().subscribe(
      res => {
        this.indexService.index = res;
      },
      err => console.error(err)
    );
  }

  deleteIndex(id: String){
    if(confirm('Are you sure you want to delete ir?')){
      this.indexService.deleteIndex(id).subscribe(
        (res) => {
          this.getIndex();
        },
        (err) => console.error(err)
      );
    } 
  }

  editIndex(index: Index){
    this.indexService.selectedIndex = index;
  }
}
