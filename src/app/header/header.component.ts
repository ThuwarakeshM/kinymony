import { Component, OnInit, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuActive = false;
  @Input() lang: string;

  links: any[];
  homeLink: string;

  icon = faBars;

  constructor() { }

  ngOnInit() {
    this.links = [
      { name: 'Politics', link: '/' + this.lang + '/politics' },
      { name: 'Cinema', link: '/' + this.lang + '/cinema' },
      { name: 'Sports', link: '/' + this.lang + '/sports' },
      { name: 'Medicine', link: '/' + this.lang + '/medicine' },
      { name: 'General', link: '/' + this.lang + '/general' },
    ];

    this.homeLink = '/' + this.lang;
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

}
