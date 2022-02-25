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
    this.autenticacao()
  }

  createFormLogin(){
     this.formLogin = this.formBuilder.group({
       login: ["", [Validators.required, Validators.email]],
       password: ["", Validators.minLength(8)]
     })
  }

  autenticacao(){
  }

}
