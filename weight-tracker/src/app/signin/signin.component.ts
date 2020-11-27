import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginCredentials } from '../loginCredentials';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isLoggedIn: boolean = false;
  creds: LoginCredentials = {
    username: "",
    password: "",
  };

  constructor(
    private authService: AuthService, 
    private tokenService: TokenStorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
      if(this.tokenService.getToken()){
        this.isLoggedIn = true;
      }
  }

  onSubmit(): void{
      this.authService.login(this.creds).subscribe(
        loginData => {
          this.tokenService.saveToken(loginData.token);
          this.tokenService.saveUser(loginData);
          this.isLoggedIn = true;
          this.router.navigate(['']);
        }, 
        errMessage => {
          console.log(errMessage);
        }
      )
  }

}
