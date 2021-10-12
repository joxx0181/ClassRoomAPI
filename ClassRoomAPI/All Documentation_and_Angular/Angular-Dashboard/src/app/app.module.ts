import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { NavComponent } from './nav/nav.component';
import { LightConditionComponent } from './light-condition/light-condition.component';
import { HomeComponent } from './home/home.component';
import { NoiseLevelComponent } from './noise-level/noise-level.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { TempComponent } from './ClassRoom/temp/temp.component';
import { LightCComponent } from './ClassRoom/light-c/light-c.component';
import { NoiseLComponent } from './ClassRoom/noise-l/noise-l.component';
import { ContactThanksComponent } from './contact-thanks/contact-thanks.component';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    NavComponent,
    LightConditionComponent,
    HomeComponent,
    NoiseLevelComponent,
    ContactComponent,
    TempComponent,
    LightCComponent,
    NoiseLComponent,
    ContactThanksComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [HttpClientModule, CookieService,
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
