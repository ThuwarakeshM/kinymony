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
    this.fireService.getPost('TA', 3).subscribe(res => {
      res.forEach(val => {
        console.log(val);
      });
    });
  }
}
