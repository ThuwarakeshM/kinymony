import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doc } from '../models/document';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  docRef: string;
  doc: Doc;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe((res) => {
      this.docRef = res.get('ref');
      this.doc = {
        title: this.docRef,
        desc: this.docRef + ' Description',
        imageURL: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        videoURL: null,
        sections: [
          {
            title: 'Section1',
            desc: 'Desc1',
            imageURL: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
            videoURL: null,
            sections: null
          }
        ]
      };
    });
  }

}
