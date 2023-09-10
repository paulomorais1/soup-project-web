import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import type IStatisctis from './statistics.model';

@Component({
  standalone: true,
  selector: 'app-statistics-section',
  templateUrl: './statistics-section.component.html',
  styleUrls: ['./statistics-section.component.css'],
  imports: [
    CommonModule,
    MatIconModule
  ]
})

export class StatisticsSectionComponent {
  statistics: ReadonlyArray<IStatisctis> = [
    {
      materialIconName: 'family_restroom',
      amount: 700,
      item: 'Famílias cadastradas',
      destination: 'em nosso banco de dados'
    },
    {
      materialIconName: 'soup_kitchen',
      amount: 600,
      item: 'Refeições /sábado',
      destination: 'em bairros carentes'
    },
    {
      materialIconName: 'inventory_2',
      amount: 60,
      item: 'Cestas básicas /mês',
      destination: 'para famílias cadastradas'
    }
  ];
}
