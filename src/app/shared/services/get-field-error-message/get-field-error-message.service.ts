import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class GetFieldErrorMessageService {
  getErrorMessage(fieldName: string, formGroup: FormGroup) {
    const control = formGroup.get(fieldName);

    const errorMessages: { [key: string]: string } = {
      required: 'Campo obrigatório!',
      pattern: 'Formato inválido!',
      email: 'Email inválido!',
      minlength: `Mínimo de ${control?.errors?.['minlength']?.requiredLength} caracteres!`,
      maxlength: `Máximo de ${control?.errors?.['maxlength']?.requiredLength} caracteres!`
    };

    return Object.keys(control?.errors || {}).map(errorKey => errorMessages[errorKey]);
  }
}
