/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';

import { MetatagService } from '@shared/services';
import { RequestLogin } from 'app/resources/models/RequestLogin';
import { LoginService } from 'app/resources/models/services/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})

export class SignInComponent implements OnInit {
  public requestLogin: RequestLogin | undefined ;  
  
  constructor(private metatagService: MetatagService,private loginService: LoginService) { }
  
  
  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
    this.metatagService.updateMetatags({
      title: 'Projeto Sopa | Entrar',
      description: 'Faça login como administrador para acessar e gerenciar os dados vitais da ONG Projeto Sopa. Gerencie outros administradores, voluntários e demais informações com segurança e eficiência.'
    });
  }

}
