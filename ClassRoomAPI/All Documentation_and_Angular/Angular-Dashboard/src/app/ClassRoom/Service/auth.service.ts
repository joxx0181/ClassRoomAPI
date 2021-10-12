// Create service!
import { Injectable } from '@angular/core';

// Using HttpClient to call API services and both http GET & POST methods!
import {HttpParams,HttpHeaders,HttpClient, HttpClientModule} from '@angular/common/http';

// Using references!
import {observable, Observable,} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';

let params = new HttpParams()

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public cookieService: CookieService, public jwtHelper: JwtHelperService, public http: HttpClient) { }

  // Declare method for which token is expired or not! 
  isAuthenticated(){
    const token = this.cookieService.get('jwt');

    return !this.jwtHelper.isTokenExpired(token);
  }

  //Calls the login function on the API!
  login(username: string, password: string): Observable<any> {
    params=params.set("username", username);
    params=params.set("password", password);
    return this.http.get('http://localhost:38338/api/Login/Login', {params})

  }

  //Calls the register function on the API!
  register(username: string, password: string): Observable<any>{
    const body = {Username: username, Password: password}
    return this.http.post('http://localhost:38338/api/Login/Register', body, {
      headers: new HttpHeaders().set('Content-type', 'application/json')
    })
  }
}
