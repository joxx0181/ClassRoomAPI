import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  cText: string = 'Vi træffes alle hverdage mellem 8 - 16'; 

  constructor(private http:HttpClient, private router: Router) {}

  // Method for submitting data to email API using httppost request!
  onSubmit(data)
  {

    console.log(data)
    this.http.post('http://localhost:60424/api/Email/Send', JSON.stringify(data), { 
      
       headers : new HttpHeaders().set("Content-Type", "application/json")} 
    
    ).subscribe((result)=>{
      console.warn("result", result)
    })
    console.warn(data);

    // Redirect to another page after clicking submit button!
    this.router.navigate(['/contact-thanks']);
  }

}


   
   
   




