import { Component, OnInit } from '@angular/core';
import { AboutService } from "../../services/about.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public aboutService: AboutService) { }

  ngOnInit(): void {
    this.getAbout();
  }

  getAbout(){
    this.aboutService.getAbout().subscribe(
      res => {
        //this.aboutService.plasticos = res;
        this.aboutService.organicos = res;
        //this.aboutService.desechables = res;
      },
      err => console.error(err)
    );
  }
}


