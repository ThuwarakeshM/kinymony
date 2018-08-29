import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireService } from '../fire.service';
import { Meta, Title } from '@angular/platform-browser';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  cat: string;
  lang: string;

  items: any[] = [];

  constructor(
    private router: ActivatedRoute,
    private fireService: FireService,
    private meta: Meta,
    private title: Title,
    private info: InfoService
  ) {

  }

  ngOnInit() {
    this.router.paramMap.subscribe((ref) => {
      this.cat = ref.get('cat');
      this.lang = ref.get('lang');
      this.info.setLang(this.lang);
      if (this.cat) {
        this.fireService.getRecentPostsOfCategory(this.lang, this.cat).subscribe((res) => {
          this.items = res;
        });
      } else {
        this.fireService.getRecentPosts(this.lang).subscribe((res) => {
          this.items = res;
        });
      }
      this.meta.removeTag('author');
      this.meta.removeTag('keywords');
      this.meta.removeTag('description');

      this.title.setTitle('KinyMony: Latest News in India and Sri Lanka');

      this.meta.addTags([
        { name: 'author', content: 'kinymony_news_hub' },
        {
          name: 'keywords',
          content: this.lang + 'news india lanka hot recent new interesting' + this.cat + ' '
        },
        {
          name: 'description',
          content: 'Hot recent news about ${this.cat ? this.cat : "everything"} in ${this.lang} in India and Sri Lanka'
        },
      ]);
    });
  }

}
