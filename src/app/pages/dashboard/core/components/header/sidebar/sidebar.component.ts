/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Menu } from '@pages/dashboard/model/menu.model';


@Component({
    selector: 'dashboard-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls:['./sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
export class DashboardSidebarComponent {
  opened = true;

  toggle(): void {
    this.opened = !this.opened;
  }

  menu: Menu = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home',
      color: '#ff7f0e',
    },
    {
      title: 'Colaborador',
      icon: 'group_add',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Cadastrar ',
          icon: 'person_add',
          link: '/register-colaborador', 
          color: '#ff7f0e',
        },
        {
          title: 'Customers',
          icon: 'create',
          color: '#ff7f0e',
          link: '/customers',
        },
      ],
    },
  ];
  
}
