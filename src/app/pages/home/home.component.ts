import { Component, OnInit } from '@angular/core';

import { MetatagService } from '@shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  constructor(private metatagService: MetatagService) { }

  ngOnInit(): void {
    this.metatagService.updateMetatags({
      title: 'Projeto Sopa | Início',
      description: 'Bem-vindo(a). Nossas atividades tiveram início em 2015 e contamos com um grupo de voluntários que se reúnem semanalmente para o preparo e distribuição da sopa para os bairros carentes de nossa cidade. O projeto se mantém através de doações da população e outras entidades.',
    });
  }
}
