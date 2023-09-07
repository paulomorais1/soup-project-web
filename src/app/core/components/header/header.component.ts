import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import type Header from './models/header.model'

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ]
})

export class HeaderComponent {
  header: Header[] = [
    {
      materialIconName: 'home',
      label: 'Início',
      path: '/'
    },
    {
      materialIconName: 'volunteer_activism',
      label: 'Serviços',
      path: '/services'
    },
    {
      materialIconName: 'info',
      label: 'Sobre',
      path: '/about'
    },
    {
      materialIconName: 'visibility',
      label: 'Transparência',
      path: '/transparency'
    },
    {
      materialIconName: 'description',
      label: 'Equipe e Documentações',
      path: '/team-and-documentation'
    }
  ]
}
