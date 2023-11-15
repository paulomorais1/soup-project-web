// form-colaborador.component.ts

import { Component, Input } from '@angular/core';
import { IUser } from 'app/resources/models/colaborador.models';

@Component({
  selector: 'app-form-colaborador',
  templateUrl: './form-colaborador.component.html',
  styleUrls: ['./form-colaborador.component.scss'],
})
export class FormColaboradorComponent {
  @Input() user: IUser | undefined;
}
