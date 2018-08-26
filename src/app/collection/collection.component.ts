import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  cat: string;

  items = [
    {
      title: 'Item1',
      desc: 'A wonderful Item',
      img: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      link: '/doc/item1'
    },
    {
      title: 'Item2',
      desc: 'A wonderful Item',
      img: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      link: '/doc/item2'
    },
    {
      title: 'Item3',
      desc: 'A wonderful Item oisadfoai sdnmflskafoisa dnmfoasd fiomasdklfsa iodfklasdfuiop awehf komawdiocvjhsadokv masdfklghoaesfmklsdafoisamkdfljwaeoifnrweklafncoSUZDJfsoajdfoijh',
      img: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      link: '/doc/item3'
    },
    {
      title: 'Item4',
      desc: 'A wonderful Item',
      img: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      link: '/doc/item4'
    },
    {
      title: 'Item5',
      desc: 'A wonderful Item',
      img: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      link: '/doc/item5'
    },
    {
      title: 'Item6',
      desc: 'A wonderful Item',
      img: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      link: '/doc/item6'
    },
  ];

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.paramMap.subscribe((ref) => {
      this.cat = ref.get('cat');
    });
  }

}
