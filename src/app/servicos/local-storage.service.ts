import { Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage:any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { 
    this.storage = sessionStorage;
  }

  isLocalStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof sessionStorage !== 'undefined';
  }
  setItem(key: string, value: any): boolean {
    if (!isPlatformBrowser(this.platformId  )){
      this.storage.setItem(key, value);
      return true;
    }
    return false;
  }

  getItem(key: string): any {
    if (!isPlatformBrowser(this.platformId  )){
      return JSON.parse(JSON.stringify(this.storage.getItem(key)));
    }


    return {};
  }

}
