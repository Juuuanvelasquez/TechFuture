import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { IndexService } from "../../services/index.service";

@Component({
  selector: 'app-indexform',
  templateUrl: './indexform.component.html',
  styleUrls: ['./indexform.component.css']
})
export class IndexformComponent implements OnInit {

  constructor(public indexService: IndexService) { }

  ngOnInit(): void {
  }

  addIndex(form: NgForm){
    if(form.value._id){
      this.indexService.editIndex(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    } else{
      this.indexService.createIndex(form.value).subscribe(
        res => {
          console.log(res)
          form.reset();
        },
        err => console.error(err)
      );
    }
  }
}
