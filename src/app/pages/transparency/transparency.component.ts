import { Component, OnInit } from '@angular/core';

import { MetatagService } from '@shared/services';

@Component({
  selector: 'app-transparency',
  templateUrl: './transparency.component.html'
})

export class TransparencyComponent implements OnInit {
  constructor(private metatagService: MetatagService) { }

  ngOnInit(): void {
    this.metatagService.updateMetatags({
      title: 'Projeto Sopa | Transparência',
      description: 'Aqui compartilhamos informações cruciais sobre nossa organização, valores e práticas. Você encontrará detalhes sobre nossa missão, equipe, finanças e compromisso com a ética e a responsabilidade. Acreditamos na importância da transparência como base para construir confiança com nossa comunidade e parceiros.'
    });
  }
}
