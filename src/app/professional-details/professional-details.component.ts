import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.css']
})
export class ProfessionalDetailsComponent implements OnInit {
  details = {
    "Name": "John Doe",
    "Age": "38 years",
    "Location": "Rome, Italy",
    "Experience": "15 years",
    "Degree": "MBA",
    "imgUrl": "https://ggrmlawfirm.com/wp-content/uploads/avatar-placeholder.png"
  }

  imgUrl = null
  placeholderUrl = "https://via.placeholder.com/150"

  constructor() { }

  ngOnInit() {
  }

  onClickImage() {
    alert("Stop Clicking Me")
  }

}
