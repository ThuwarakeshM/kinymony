import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) {
  }

  ngOnInit() {
  }
}
