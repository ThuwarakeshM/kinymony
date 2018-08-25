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
    { name: 'Cinema', link: 'cinema' },
    { name: 'Sports', link: 'sports' },
    { name: 'Medicine', link: 'medicine' },
    { name: 'General', link: 'general' },
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

}
