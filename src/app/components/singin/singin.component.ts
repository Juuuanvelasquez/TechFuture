import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UsersService } from "../../services/users.service";
import { Users } from "../../models/users";

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor(public usersService: UsersService, public router: Router) { }

  ngOnInit(): void {
  }
  onSingin(form: NgForm){
    this.usersService.loginUser(form.value).subscribe( res => {
      this.router.navigateByUrl('index');
    });
  }

}
