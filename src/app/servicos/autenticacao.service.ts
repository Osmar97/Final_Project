import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  url='http://localhost:3000'
  constructor(private http: HttpClient,private cookieService: CookieService) { }

  login(email: string, password: string): Observable<any> {
    const url = `${this.url}/login`;
    const body = { email, password };
    return this.http.post<any>(url, body);
  }
  obterDistritos(): Observable<any> {
    const url = `${this.url}/distritos`;
    return this.http.get<any>(url)
  }
  obterMunicipios(): Observable<any> {
    const url = `${this.url}/municipios`;
    return this.http.get<any>(url)
  }
  // Método para definir um cookie
  setCookie(key: string, value: string): void {
    this.cookieService.set(key, value);
  }

  // Método para obter um cookie
  getCookie(key: string): string | undefined {
    return this.cookieService.get(key);
  }

  registerClient(clientData: any): Observable<any> {
    return this.http.post<any>(`${this.url}/register`, clientData);
  }

 
}
