import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {UserModel} from "../models/UserModel";
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token!:string
  private loggedUser! : string;
  public isLoggedIn : Boolean = false;
  public roles! : string[];
  private helper  = new JwtHelperService();
  constructor(private router : Router, private httpClient: HttpClient) { }


  login(user : UserModel){
    return this.httpClient.post<UserModel>('http://localhost:8080/login',user,{observe:'response'})
  }

  saveToken(jwt : string){
    localStorage.setItem('jwt',jwt);
    this.token = jwt;
    this.isLoggedIn = true;
    this.decodedJWT();

  }

  decodedJWT() {
    if (this.token) {
      const decodedToken = this.helper.decodeToken(this.token);
      if (decodedToken) {
        this.loggedUser = decodedToken.sub;
        this.roles = decodedToken.roles || [];
        console.log(`roles: ${this.roles}`);
        console.log(`logged user: ${this.loggedUser}`);
      } else {
        console.error("Invalid token");
      }
    } else {
      console.error("Token is undefined");
    }
  }

  getToken(){
    return this.token;
  }


}
