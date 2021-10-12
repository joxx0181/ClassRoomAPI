import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LightData } from '../Class/light-data';
import { LightsService } from '../Service/lights.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-light-c',
  templateUrl: './light-c.component.html',
  styleUrls: ['./light-c.component.css']
})

export class LightCComponent implements OnInit {

  // Using toogle to change backgound-color of body depending on button click!
  toggle = true;
  status = 'Light On'; 
  
  enableDisableLight() {
      this.toggle = !this.toggle;
      this.status = this.toggle ? 'Light On' : 'Light Off';
  }


  allLight: Observable < LightData[] > ;
 
  constructor(private LightsService:LightsService) {}

  GetLight() {  
    debugger;  
    this.allLight = this.LightsService.getLight();  
   }

  ngOnInit(): void {

    this.GetLight();
   
  }
}
