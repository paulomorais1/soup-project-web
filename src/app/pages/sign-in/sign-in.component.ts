import { Component, OnInit } from '@angular/core';

import { MetatagService } from '@shared/services';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})

export class SignInComponent implements OnInit {
  constructor(private metatagService: MetatagService) { }

  ngOnInit() {
    this.metatagService.updateMetatags({
      title: 'Projeto Sopa | Entrar',
      description: 'Faça login como administrador para acessar e gerenciar os dados vitais da ONG Projeto Sopa. Gerencie outros administradores, voluntários e demais informações com segurança e eficiência.'
    });
  }
}
