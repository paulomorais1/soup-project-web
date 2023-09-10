import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatSnackBarModule,
  MatSnackBar,
  type MatSnackBarHorizontalPosition,
  type MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { send } from '@emailjs/browser';

import { environment } from '@environments/environment';

import { contacts } from '@shared/mocks';

import type IContact from './contact.model';

@Component({
  standalone: true,
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ]
})

export class ContactSectionComponent {
  formGroup: FormGroup;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  messageMaxLength = 500;

  address = `${contacts[2].value} • ${contacts[3].value}`;
  contact = `${contacts[1].value} • ${contacts[0].value}`;

  constructor(private formBuilder: FormBuilder, private matSnackBar: MatSnackBar) {
    this.formGroup = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
          Validators.pattern('^[A-Za-z ]+$')
        ]
      ],
      surname: ['',
        [
          Validators.required,
          Validators.pattern('^[A-Za-z ]+$')
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      phone: ['',
        [
          Validators.required,
          Validators.pattern(/^[0-9]+$/)
        ]
      ],
      subject: ['',
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ],
      message: ['',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(this.messageMaxLength)
        ]
      ]
    });
  }

  showToast(message: string) {
    this.matSnackBar.open(message, 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  getErrorMessage(fieldName: string) {
    const control = this.formGroup.get(fieldName);

    const errorMessages: { [key: string]: string } = {
      required: 'Campo obrigatório!',
      pattern: 'Formato inválido!',
      email: 'Email inválido!',
      minlength: `Mínimo de ${control?.errors?.['minlength']?.requiredLength} caracteres!`,
      maxlength: `Máximo de ${control?.errors?.['maxlength']?.requiredLength} caracteres!`
    };

    return Object.keys(control?.errors || {}).map(errorKey => errorMessages[errorKey]);
  }

  async onSubmit() {
    if (!this.formGroup.valid) return;

    try {
      const formValue: IContact = this.formGroup.value;

      await send(
        environment.emailJsServiceId,
        environment.emailJsTemplateId,
        formValue as unknown as Record<string, unknown>,
        environment.emailJsPublicKey
      );

      this.showToast('Mensagem enviada com sucesso!');
    } catch {
      this.showToast('Mensagem não enviada. Tente novamente mais tarde!');
    }
  }
}
