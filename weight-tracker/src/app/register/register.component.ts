import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { RegistrationRequest } from '../registration-request';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoggedIn: boolean = false;
  confirmPassword: string;

  registerData: RegistrationRequest = {
    username: "",
    email: "",
    password: ""
  }

  constructor(
    private tokenService: TokenStorageService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void{

    if(this.registerData.username.length == 0){
      alert("Please enter a username");
    }else if (this.registerData.email.length == 0){
      alert("Please enter an email");
    }else if(this.confirmPassword !== this.registerData.password){
      alert("Passwords do not match");
    }else if (this.registerData.password.length < 6 || this.registerData.password.length > 40){
      alert("Password must be between 6 and 40 characters");
    } else{
      this.authService.register(this.registerData).subscribe(msgResp => {
        //todo: send over query paramter
       this.router.navigate(['']);
     }
       ), 
       errMessage => {
         console.log(errMessage);
       }
    }


    
  }

}
