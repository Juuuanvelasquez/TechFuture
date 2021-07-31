import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AboutService } from "../../services/about.service";

@Component({
  selector: 'app-desechablesform',
  templateUrl: './desechablesform.component.html',
  styleUrls: ['./desechablesform.component.css']
})
export class DesechablesformComponent implements OnInit {

  constructor(public aboutService: AboutService) { }

  ngOnInit(): void {
  }

  addDesechable(form: NgForm){
    if(form.value._id){
      this.aboutService.editDesechable(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    } else{
      this.aboutService.createDesechable(form.value).subscribe(
        res => {
          console.log(res)
          form.reset();
        },
        err => console.error(err)
      );
    }
  }

}
