import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireService } from '../fire.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  lang: string;
  docRef: string;
  doc;
  constructor(
    private router: ActivatedRoute,
    private fireService: FireService
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe((res) => {
      this.lang = res.get('lang');
      this.docRef = res.get('ref');
      this.fireService.getPost(this.lang, this.docRef).subscribe((a) => {
        this.doc = a[0];
      });
    });
  }

}
