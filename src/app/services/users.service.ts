import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Users } from "../models/users";
import { JwtResponse } from "../models/jwt-response";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL_USERS = 'http://localhost:3000/api/users';
  userSubject = new BehaviorSubject(false);
  private token!: string;
  
  selectedUser: Users = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirm:''
  };

  user: Users[] | undefined;

  constructor(public http: HttpClient, public router: Router) { }

  getUser(){
    return this.http.get<Users[]>(this.URL_USERS)
  }
  createUser(user: Users): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(`${this.URL_USERS}/register`, user).pipe(tap(
      (res:JwtResponse) => {
        if (res){
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      }
    ));
  }
  loginUser(user: Users): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(`${this.URL_USERS}/login`, user).pipe(tap(
      (res:JwtResponse) => {
        if (res){
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      }
    ));
  }
  logout(): void{
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRED_IN");
  }
  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }
  private getToken(): string {
    if (!this.token){
      this.token = localStorage.getItem("ACCESS_TOKEN") || '{}';
    }
    return this.token;
  }

  deleteUser(){
    
  }

}
