import { Component, OnInit, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuActive = false;

  links: any[];
  homeLink: string;

  icon = faBars;

  constructor(
    private info: InfoService
  ) {

  }

  ngOnInit() {
    this.info.getLang().subscribe((res) => {
      const lang = res;
      this.links = [
        { name: 'Politics', link: '/' + lang + '/politics' },
        { name: 'Cinema', link: '/' + lang + '/cinema' },
        { name: 'Sports', link: '/' + lang + '/sports' },
        { name: 'Medicine', link: '/' + lang + '/medicine' },
        { name: 'General', link: '/' + lang + '/general' },
      ];
      this.homeLink = '/' + lang;

    });




  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

}
