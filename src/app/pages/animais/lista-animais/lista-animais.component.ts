import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Animais } from 'src/app/core/interface/animais';
import { AnimaisService } from 'src/app/core/services/animais.service';
import { TokenService } from 'src/app/core/services/token.service'

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {
  animais$ !: Observable<Animais>

  constructor(private usuarioService: TokenService, private animaisService: AnimaisService) { }

  ngOnInit(): void {
    this.animais$ = this.usuarioService.retornaToken().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? ''; 
        return this.animaisService.listaDoUsuario(userName)
      })
    )
}
