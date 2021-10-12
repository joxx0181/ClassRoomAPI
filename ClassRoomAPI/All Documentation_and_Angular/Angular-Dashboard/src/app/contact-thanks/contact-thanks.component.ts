import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-thanks',
  templateUrl: './contact-thanks.component.html',
  styleUrls: ['./contact-thanks.component.css']
})
export class ContactThanksComponent implements OnInit {

  ctText: string = 'Tak for din mail.'; 

  constructor() { }

  ngOnInit(): void {
  }

}
