import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import type IService from './services.model';

@Component({
  standalone: true,
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css'],
  imports: [
    CommonModule,
    MatIconModule
  ]
})

export class ServicesSectionComponent {
  private basePath = '/assets/photos/';

  services: IService[] = [
    {
      materialIconName: 'inventory_2',
      title: 'Cestas básicas',
      description: 'Durante a pandemia e a impossibilidade de servir semanalmente a sopa na qual ocorre aglomerações, nosso projeto passou a realizar cadastros de famílias e a realizar a entrega de cestas básicas contendo: arroz, macarrão, óleo, sal, legumes e pão.',
      srcImage: `${this.basePath}food.png`
    },
    {
      materialIconName: 'volunteer_activism',
      title: 'Recebimento de doações',
      description: 'Quer contribuir com nosso projeto mas não sabe como ajudar? Além dos alimentos, você pode doar produtos de limpeza e de cozinha, para higienização e preparo da sopa. Doar faz bem para a alma e para o coração. Faça sua parte!',
      srcImage: `${this.basePath}donation.png`
    },
    {
      materialIconName: 'soup_kitchen',
      title: 'Sopa às sextas-feiras e aos sábados',
      description: 'O preparo e distribuição são realizados por voluntários que disponibilizam seu tempo para nos auxiliar, realizando a entrega da sopa em bairros carentes.',
      srcImage: `${this.basePath}soup.png`
    }
  ];
}
