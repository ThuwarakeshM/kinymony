import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireService } from '../fire.service';
import { Meta, Title } from '@angular/platform-browser';
import { InfoService } from '../info.service';

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
    private fireService: FireService,
    private meta: Meta,
    private title: Title,
    private info: InfoService
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe((res) => {
      this.lang = res.get('lang');
      this.docRef = res.get('ref');
      this.info.setLang(this.lang);
      this.fireService.getPost(this.lang, this.docRef).subscribe((a) => {
        this.doc = a[0];
      });
      this.title.setTitle('KinyMony: ' + this.doc.title);
      this.meta.updateTag({
        name: 'keywords', content: this.doc.keywords ? this.doc.keywords : ('General'
          + ' news  india lanka hot latest' + this.lang)
      });
      this.meta.updateTag({ name: 'description', content: this.doc.desc });
    });
  }

}
