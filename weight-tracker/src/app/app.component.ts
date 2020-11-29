import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weight Tracker';
  

  constructor(
    public tokenService: TokenStorageService,
    private router: Router){
    
  }

  onLogOut() : void{
    this.tokenService.signOut();
    this.router.navigate(['/login']);
  }
}
