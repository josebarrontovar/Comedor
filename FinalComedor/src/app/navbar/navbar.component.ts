import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() itemSelected = '';
  constructor() { }

  ngOnInit() {
  }
  homeSelected() {
    if (this.itemSelected === 'home') {
      return true;
    }
    return false;
  }
  historySelected() {
    if (this.itemSelected === 'history') {
      return true;
    }
    return false;
  }
  userSelected() {
    if (this.itemSelected === 'user') {
      return true;
    }
    return false;
  }

  profileSelected() {
    if (this.itemSelected === 'profile') {
      return true;
    }
    return false;
  }
}
