import { Injectable } from '@angular/core';

@Injectable()
export class RedirectService {
  private url = '';
  constructor() { }

  pending() {
    return this.url !== '';
  }

  clear() {
    return this.set('');
  }

  set(url) {
    return this.url = url;
  }

  consume() {
    const url = this.url;
    this.clear();
    return url;
  }

}
