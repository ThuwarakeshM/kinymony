import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireService } from '../fire.service';
import { Meta, Title } from '@angular/platform-browser';

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
    private title: Title
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe((res) => {
      this.lang = res.get('lang');
      this.docRef = res.get('ref');
      this.fireService.getPost(this.lang, this.docRef).subscribe((a) => {
        this.doc = a[0];
      });

      this.meta.removeTag('author');
      this.meta.removeTag('keywords');
      this.meta.removeTag('description');

      this.title.setTitle('KinyMony: Latest News in India and Sri Lanka');

      this.meta.addTags([
        { name: 'author', content: 'kinymony_news_hub' },
        {
          name: 'keywords',
          content: this.lang + '${this.doc.keywords ? this.doc.keywords : "news india lanka hot recent new interesting"}',
        },
        {
          name: 'description',
          content: '${this.doc.desc ? this.doc.desc : "Kinymony, Latest and Fastest news provider for India and Sri Lanka"}'
        },
      ]);
    });
  }

}
