import { Component } from '@angular/core';
import {UserModel} from "../../models/UserModel";
import {AuthService} from "../../Services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user = new UserModel();
  error:number = 0;
  url="home"
constructor(private router: Router,private authService : AuthService) {}

  logIn() {
    console.log("pooooooooooo\n");
    console.log(`username : ${this.user.username} |  password : ${this.user.password}`);
    this.authService.login(this.user).subscribe(
      {
        next: (data)=>{
          let jwtToken = data.headers.get("Authorization")!;
          this.authService.saveToken(jwtToken);
          this.router.navigate(['/home']);
        },
        error:(error : any) => {
          this.error=1;
          console.log("error fatal !")
        }
      }
    )
  }
}
