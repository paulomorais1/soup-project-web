import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Menu } from '@pages/dashboard/model/menu.model';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardSidebarComponent {
  opened = true;
  @Output() menuItemClicked = new EventEmitter<string>();

  toggle(): void {
    this.opened = !this.opened;
  }

  onItemClick(link: string): void {
    this.menuItemClicked.emit(link);
  }

  menu: Menu = [
    {
      title: 'Colaborador',
      icon: 'group_add',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Cadastrar',
          link: '/dashboard/register-colaborador',
          color: '#ff7f0e',
        },
        {
          title: 'Customers',
          link: '/dashboard/colaborador-customers',
          color: '#ff7f0e',
        },
      ],
    },
    {
      title: 'Beneficiario',
      icon: 'person_add',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Cadastrar',
          link: '/dashboard/register-beneficiary',
          color: '#ff7f0e',
        },
        {
          title: 'Customers',
          color: '#ff7f0e',
          link: '/dashboard/beneficiary-customers',
        },
      ],
    },
  ];
}
