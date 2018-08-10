import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  images = [
    'http://via.placeholder.com/1300x400',
    'http://via.placeholder.com/1300x400',
    'http://via.placeholder.com/1300x400'
  ];

  constructor() { }

  ngOnInit() {
  }

}
