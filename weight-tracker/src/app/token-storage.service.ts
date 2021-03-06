import { Injectable } from '@angular/core';
import { Router, RouterModule,Routes } from '@angular/router';
import { userData } from './userData';

const tokenKey: string = "authToken";
const userKey: string = "userToken";

@Injectable({
  providedIn: 'root'
})
//no mans land
export class TokenStorageService {


  constructor(private router: Router) { }

  signOut(): void{  
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  saveToken(token: string): void{
  
    window.sessionStorage.removeItem(tokenKey);
    window.sessionStorage.setItem(tokenKey, token);
  }

  getToken(): string{
    return window.sessionStorage.getItem(tokenKey);
  }

  saveUser(user: userData): void{
      window.sessionStorage.removeItem(userKey);
      window.sessionStorage.setItem(userKey, JSON.stringify(user));
  }

  getUser(): userData{
    return JSON.parse(window.sessionStorage.getItem(userKey));
  }
}
