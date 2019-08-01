import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {
  details = {
    "Name": "John Doe",
    "Age": "38 years" ,
    "Location": "Penang" ,
    "Experience": "18 years"
  }
  constructor() { }

  ngOnInit() {
  }

  onClickImage() {
    alert("Stop Clicking Me")
  }

}
