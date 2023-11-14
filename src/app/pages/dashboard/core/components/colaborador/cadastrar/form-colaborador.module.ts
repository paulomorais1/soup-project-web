// form-colaborador.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormColaboradorComponent } from './form-colaborador.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [FormColaboradorComponent],
  imports: [CommonModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  exports: [FormColaboradorComponent],
})
export class FormColaboradorModule {}
