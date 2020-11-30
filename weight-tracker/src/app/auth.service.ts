import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginCredentials } from './loginCredentials';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { RegistrationRequest } from './registration-request';

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

  register(registrationData: RegistrationRequest): Observable<any>{
    let url: string = "http://localhost:8080/api/auth/register";
    return this.client.post<MessageService>(
      url,
      registrationData,
      {headers: new HttpHeaders({"Content-Type": "application/json"})}
    );
  }
}
