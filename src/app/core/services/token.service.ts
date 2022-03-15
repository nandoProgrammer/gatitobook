import { Injectable } from '@angular/core';
import { LocalStorage } from '../helpers/localstorage';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

   retornaToken(){
     return LocalStorage.getItem(KEY);
   }

   salvaToken(token:any){
     LocalStorage.setItem(KEY, token);
   }
   
   excluiToken(){
     LocalStorage.removeItem(KEY)
   }

   possuiToken(){
     this.retornaToken();
   }

}
