import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { TokenService } from './token.service';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  auth(usuario: string, password: string): Observable<HttpResponse<any>>{
     return this.httpClient.post<any>(`${API}/user/login`, {
        userName: usuario,
        password: password,
     },{ observe: 'response' })
     .pipe(
       tap(res => {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.tokenService.salvaToken({"token": authToken, "user": res.body})
       })
     )
  }
}
