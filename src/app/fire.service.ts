import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private db: AngularFireDatabase) { }

  getRecentPosts(lan: string) {
    return this.db.list(lan, ref => ref.limitToLast(6)).valueChanges();
  }

  getRecentPostsOfCategory(lan: string, cat: string) {
    return this.db.list(lan, ref => ref.orderByChild('category').equalTo(cat).limitToLast(6)).valueChanges();
  }

  getPost(lan: string, id: number) {
    return this.db.list(lan, ref => ref.orderByKey().equalTo(id.toString())).valueChanges();
  }
}
