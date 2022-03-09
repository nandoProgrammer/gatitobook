import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import  { FormBuilder, FormGroup, Validators }  from  '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormLogin()
  }

  createFormLogin() {
    this.formLogin = this.formBuilder.group({
       user: ['', Validators.required],
       password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  fLogin(campo: string){
    return this.formLogin.get(campo)
  }

  autenticacao(){
    this.authService.auth(this.formLogin.value.user, this.formLogin.value.password).subscribe(res => {
      //redireciona para dashboard
    }, () => {
      alert('Usuário ou senha errados')
    })
  }

}
