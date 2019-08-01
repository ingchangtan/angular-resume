import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  sectionTitle = "I'M A WEB DESIGNER"

  description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum distinctio suscipit delectus, commodi amet dolorem temporibus possimus similique ea ullam ipsa! Ipsum repellendus harum rem quos! Ut nihil vero dolores?\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum distinctio suscipit delectus, commodi amet dolorem temporibus possimus similique ea ullam ipsa! Ipsum repellendus harum rem quos! Ut nihil vero dolores?\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum distinctio suscipit delectus, commodi amet dolorem temporibus possimus similique ea ullam ipsa! Ipsum repellendus harum rem quos! Ut nihil vero dolores?"
  
  constructor() { }

  ngOnInit() {
  }

}
