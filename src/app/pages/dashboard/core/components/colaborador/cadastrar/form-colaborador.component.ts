import { Component, Input } from '@angular/core';
import { IUser } from '@pages/dashboard/model/colaborador.component';

@Component({
  selector: 'app-form-colaborador',
  templateUrl: './form-colaborador.component.html',
  styleUrls: ['./form-colaborador.component.scss']
})
export class FormColaboradorComponent {
  @Input()
  user!: IUser;
}
