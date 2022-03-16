import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animais } from '../interface/animais';
import { TokenService } from './token.service';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private httpClient: HttpClient, private tokrnService: TokenService) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
     const token = this.tokrnService.retornaToken();
     const headers = new HttpHeaders().append('x-access-token', token);
     return this.httpClient.get<Animais>(`${API}/${nomeDoUsuario}/photos`, {
       headers,
     })
  }

}
