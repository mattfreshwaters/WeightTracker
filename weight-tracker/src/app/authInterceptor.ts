import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private tokenStorageService: TokenStorageService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.tokenStorageService.getToken()
        if(token) {
            let authRequest = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + token)
            });
            return next.handle(authRequest);
        }
        return next.handle(req);
    }

    
}