import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireService } from '../fire.service';

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
    private fireService: FireService
  ) {
  }

  ngOnInit() {
    this.router.paramMap.subscribe((ref) => {
      this.cat = ref.get('cat');
      this.lang = ref.get('lang');
      if (this.cat) {
        this.fireService.getRecentPostsOfCategory(this.lang, this.cat).subscribe((res) => {
          this.items = res;
        });
      } else {
        this.fireService.getRecentPosts(this.lang).subscribe((res) => {
          this.items = res;
        });
      }
    });
  }

}
