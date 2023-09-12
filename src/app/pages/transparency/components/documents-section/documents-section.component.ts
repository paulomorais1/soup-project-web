import { Component } from '@angular/core';

import type IDocument from './documents.model';

@Component({
  selector: 'app-documents-section',
  templateUrl: './documents-section.component.html',
  styleUrls: ['./documents-section.component.scss']
})

export class DocumentsSectionComponent {
  private basePath = '/assets/docs/';

  accountDetailing: IDocument[] = [
    {
      title: 'Diário Oficial de Taquaritinga, 07 de fevereiro de 2020 — Ano V Edição nº 947',
      documentPath: `${this.basePath}diario-oficial-de-taquaritinga.pdf`
    },
    {
      title: 'Termo de fomento 2020',
      documentPath: `${this.basePath}termo-de-fomento-202.pdf`
    },
    {
      title: 'Relatório de atividades desenvolvidas 2020',
      documentPath: `${this.basePath}relatorio-de-atividades-desenvolvidas-2020.pdf`
    },
    {
      title: 'Extratos conta corrente de julho à novembro 2020',
      documentPath: `${this.basePath}extratos-conta-corrente-de-julho-a-novembro-2020.pdf`
    },
    {
      title: 'Investimento financeiro',
      documentPath: `${this.basePath}investimento-financeiro.pdf`
    },
    {
      title: 'Despesas - julho à dezembro 2020',
      documentPath: `${this.basePath}despesas-julho-a-dezembro-2020.pdf`
    },
    {
      title: 'Despesas - 2021',
      documentPath: `${this.basePath}despesas-2021.pdf`
    },
    {
      title: 'Despesas - 2022 e 2023',
      documentPath: `${this.basePath}despesas-2022-2023.pdf`
    }
  ];

  teamAndDocumentation: IDocument[] = [
    {
      title: 'Estatuto social',
      documentPath: `${this.basePath}estatuto-social.pdf`
    },
    {
      title: 'Relação nominal dos dirigentes',
      documentPath: `${this.basePath}relacao-nominal-dos-dirigentes.pdf`
    },
    {
      title: 'Plano de trabalho',
      documentPath: `${this.basePath}plano-de-trabalho.pdf`
    },
    {
      title: 'Ata de reunião',
      documentPath: `${this.basePath}ata-de-reuniao.pdf`
    },
    {
      title: 'Ata de eleição e posse',
      documentPath: `${this.basePath}ata-de-eleicao-e-posse.pdf`
    }
  ];
}
