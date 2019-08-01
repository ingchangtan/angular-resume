import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'My Awesome App';
  buttons = [
    "About Me",
    "Resume",
    "Portfolio",
    "Blog",
    "Contact Me"
  ]
  clickedButton = null
  // scenario 1: only one of them will be highlighted
  // scenario 2: clicking them will highlight them(there can be multiple)

  toggleHighlighted(button: string) {
    this.clickedButton = button
  }
}
