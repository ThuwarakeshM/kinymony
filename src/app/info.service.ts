import { Injectable } from '@angular/core';
import { Subject, Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private lang = new Subject<any>();

  constructor() {
  }

  setLang(lang) {
    this.lang.next(lang);
  }

  getLang(): Observable<any> {
    return this.lang.asObservable();
  }
}
