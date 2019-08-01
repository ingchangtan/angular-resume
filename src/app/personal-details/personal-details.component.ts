import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  sectionTitle = "About Me"
  details = {
    "Name": "John Doe",
    "Age": "38 years",
    "Location": "Rome, Italy",
    "Experience": "15 years",
    "Degree": "MBA",
    "Career Level":"Mid",
    "Phone": "(800) 123-4567",
    "Fax": "(800) 123-4567",
    "Email": "example@example.com",
    "Website": "example.com"
  }
  isHovering = false

  
  constructor() { }

  ngOnInit() {
  }

  triggerHover() {
    this.isHovering = true
  }
  
  notHover() {
    this.isHovering = false
  }
}
