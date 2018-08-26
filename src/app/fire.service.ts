import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private db: AngularFireDatabase) { }

  getPosts() {
    return this.db.list('posts').valueChanges();
  }

  getPostByTitle(title: string) {
    return this.db.list('posts', ref => ref.orderByChild('title').equalTo(title)).valueChanges();
  }
}
