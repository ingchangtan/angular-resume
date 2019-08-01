import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  title = 'Resume'
  btnText = 'Edit Resume'
  btnColor = 'blue'

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.btnText = 'Save Changes'
    this.btnColor = 'green'
  }

}
