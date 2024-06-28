import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetsService {

  url='http://localhost:3000'
  constructor(private http: HttpClient) { }
  
  verAnunciosDoMunicipio(id_munic: any): Observable<any[]> {
    const params = new HttpParams().set('id_munic', id_munic);
    return this.http.get<any[]>(this.url+'/anuncios', { params });
  }


  obterAutor(id_user: any): Observable<any[]> {
    const params = new HttpParams().set('id_user', id_user);
    return this.http.get<any>(this.url+'/utilizador', { params });
  }

  obterComentarioDoPost(id_anuncio: any): Observable<any[]> {
    const params = new HttpParams().set('id_anuncio', id_anuncio);
    return this.http.get<any>(this.url+'/comentarios', { params });
  }


}