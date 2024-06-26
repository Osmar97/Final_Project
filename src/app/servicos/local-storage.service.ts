import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage: Storage;

  constructor() { 
    this.storage = sessionStorage;
  }
  setItem(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, value);
      return true;
    }
    return false;
  }

  getItem(key: string): any {
    if (this.storage) {
      return JSON.parse(JSON.stringify(this.storage.getItem(key)));
    }
    return null;
  }

}
