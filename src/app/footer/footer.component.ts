import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private info: InfoService
  ) { }

  ngOnInit() {
    this.info.getLang().subscribe((res) => {
      console.log(res);
    });
  }

}
