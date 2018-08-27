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
    { name: 'Politics', link: 'en/politics' },
    { name: 'Cinema', link: 'en/cinema' },
    { name: 'Sports', link: 'en/sports' },
    { name: 'Medicine', link: 'en/medicine' },
    { name: 'General', link: 'en/general' },
  ];

  icon = faBars;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

}
