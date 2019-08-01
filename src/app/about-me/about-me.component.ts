import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  navItemTitle = "About Me"
  isHighlighted = false

  constructor() { }

  ngOnInit() {
  }

  toggleHighlighted() {
    this.isHighlighted = !this.isHighlighted
  }

}
