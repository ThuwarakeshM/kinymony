import { Component, OnInit } from '@angular/core';
import { FireService } from './fire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private fireService: FireService) {
  }

  ngOnInit() {
    this.fireService.getPostByTitle('test').subscribe(res => {
      console.log(res);
    }
    );
  }
}
