import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url='https://servidor-ushare.vercel.app'
  constructor(private http: HttpClient) { }

  publicarAnuncio(anuncio:any): Observable<any> {
    const url = `${this.url}/anuncios`;
    const body = anuncio;

    console.log(body)
    return this.http.post<any>(url, body);
  }
}
