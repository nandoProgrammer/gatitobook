import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { minusculoValidator } from 'src/app/core/validators/minusculo.validator';
import { UsuarioExisteService } from 'src/app/core/services/usuario-existe.service';
import { usuarioSenhaIguaisValidator } from 'src/app/core/validators/usuario-senha-igual.validator';
import { NovoUsuarioService } from 'src/app/core/services/novo-usuario.service';

import { NovoUsuario } from 'src/app/core/interface/novo-usuario';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioExisteService: UsuarioExisteService,
    private novoUsuarioService: NovoUsuarioService,
    private router: Router
    ) { }

  ngOnInit(): void {
      this.novoUsuarioForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: ['', [minusculoValidator],[this.usuarioExisteService.usuarioJaExite()]],
        password: [''],
      },
      {
        validators: [usuarioSenhaIguaisValidator],
      });
  }

  fUserForm(campo: string){
    return this.novoUsuarioForm.get(campo)
  }

  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

}
