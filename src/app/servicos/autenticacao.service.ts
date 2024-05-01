import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient,private cookieService: CookieService) { }

  login(email: string, password: string): Observable<any> {
    const url = '/login';
    const body = { email, password };
    return this.http.post<any>(url, body);
  }
  // Método para definir um cookie
  setCookie(key: string, value: string): void {
    this.cookieService.set(key, value);
  }

  // Método para obter um cookie
  getCookie(key: string): string | undefined {
    return this.cookieService.get(key);
  }
}
