import { Component, OnInit } from '@angular/core';
import { AboutService } from "../../services/about.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-aboutform',
  templateUrl: './aboutform.component.html',
  styleUrls: ['./aboutform.component.css']
})
export class AboutformComponent implements OnInit {

  constructor(public aboutService: AboutService) { }

  ngOnInit(): void {
  }

  addAbout(form: NgForm){
    if(form.value._id){
      this.aboutService.editPlastico(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    }
    if(form.value._id){
      this.aboutService.editOrganico(form.value).subscribe(
        res => console.log(res),
        err => console.error(err)
      )
    }
    if(form.value._id){
      this.aboutService.createPlastico(form.value).subscribe(
        res => {
          console.log(res)
          form.reset();
        },
        err => console.error(err)
      );
    }
    if(form.value._id){
      this.aboutService.createOrganico(form.value).subscribe(
        res => {
          console.log(res)
          form.reset();
        },
        err => console.error(err)
      );
    }
  }

}
