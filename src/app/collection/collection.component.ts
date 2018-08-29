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
      this.title.setTitle('KinyMony: ' + (this.cat ? this.cat : 'General') + ' News in ' + this.lang);
      this.meta.updateTag({ name: 'keywords', content: (this.cat ? this.cat : 'General') + ' news  india lanka hot latest' + this.lang });
      this.meta.updateTag({
        name: 'description', content: 'hot latest ' +
          (this.cat ? this.cat : 'General') +
          ' news in india and Sri Lanka in ' +
          this.lang
      });
    });
  }

}
