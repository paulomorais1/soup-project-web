/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dashboard-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() name: string | undefined; // Recebe o nome do usuário como um Input

  @Output() menuToggled = new EventEmitter<boolean>();
  
    logout(): void {
      console.log('Logged out');
    }
  }