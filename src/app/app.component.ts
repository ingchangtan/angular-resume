import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'My Awesome App';
  isHighlighted = false
  buttons = [
    "About Me",
    "Resume",
    "Portfolio",
    "Blog",
    "Contact Me"
  ]

  toggleHighlighted() {
    this.isHighlighted = !this.isHighlighted
  }
}
