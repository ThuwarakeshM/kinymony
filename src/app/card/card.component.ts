import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() desc: string;
  @Input() img: string;
  @Input() link: string;

    constructor() { }

  ngOnInit() {
  }

}
