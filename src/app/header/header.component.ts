import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuActive = false;

  links = [
    { name: 'Politics', link: 'politics' },
    { name: 'Cinema', link: 'Cinema' },
    { name: 'Sports', link: 'Sports' },
    { name: 'Medicine', link: 'Medicine' },
    { name: 'General', link: 'General' },
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

}
