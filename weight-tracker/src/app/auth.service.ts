import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginCredentials } from './loginCredentials';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private client: HttpClient ) { }

  login(credentials: LoginCredentials): Observable<any>{
    let url: string = "http://localhost:8080/api/auth/signin";
    return this.client.post(url, credentials, {headers: new HttpHeaders({"Content-Type": "application/json"})});
  }

  //TODO: Add register method

}
