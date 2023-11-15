import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {  MenuItem } from '@pages/dashboard/model/menu.model';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent {
  @Input() menu: MenuItem[] | undefined;

  
  isSubMenuDefined(): boolean {
    return this.menu !== undefined && this.menu.length !== undefined;
  }
}
