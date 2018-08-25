import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  cat: string;

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.paramMap.subscribe((ref) => {
      this.cat = ref.get('cat');
    });
  }

}
