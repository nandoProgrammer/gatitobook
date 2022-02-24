import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  auth(usuario: string, password: string): Observable<HttpResponse<any>>{
     return this.httpClient.post<any>(`${API}/user/login`, {
        userName: usuario,
        password: password,
     })
  }
}
