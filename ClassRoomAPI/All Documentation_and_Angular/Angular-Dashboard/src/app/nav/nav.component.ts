import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  appLogo = './assets/images/logoA7.png';
  appMenuTemp = './assets/images/headerTemp.png';
  appMenuLight = './assets/images/headerLight.png';
  appMenuNoise = './assets/images/headerNoise.png';
  appMenuContact = './assets/images/headerContact.png';

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.cookieService.delete("jwt")
    this.router.navigate(['/']);
    
  }

}
