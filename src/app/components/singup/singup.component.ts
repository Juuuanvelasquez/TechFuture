import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UsersService } from "../../services/users.service";
import { Router } from "@angular/router";
import { Users } from "../../models/users";
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(public usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  addUser(form: NgForm) : void{
    this.usersService.createUser(form.value).subscribe(res => {
      this.router.navigateByUrl('/singin');
    });
  }

}
