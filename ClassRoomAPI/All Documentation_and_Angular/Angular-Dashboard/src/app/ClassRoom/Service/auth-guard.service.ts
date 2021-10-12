// Create service!
import { Injectable } from '@angular/core';

// Using references!
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public authService: AuthService, public router: Router) { }

  // Declare method for which the login is accepted or not - in this case if the login isn´t accepted then the user is redirect to the login page! 
  canActivate(): boolean{
    if(!this.authService.isAuthenticated()){
      this.router.navigate(['login'])
      return false;
    }
    else{
      return true;
    }
  }

}
