import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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

  icon = faBars;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

}
