import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignUpService } from 'app/resources/models/services/user/create/sign-up.service';
import { IUser, IAddress, TRole } from 'app/resources/models/user.models';

@Component({
  selector: 'app-form-colaborador',
  templateUrl: './form-colaborador.component.html',
  styleUrls: ['./form-colaborador.component.scss'],
})
export class FormColaboradorComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private signUp: SignUpService,
    private snackBar: MatSnackBar
  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      surname: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      sector: ['', Validators.required],
      role: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        district: ['', Validators.required],
        city: ['', Validators.required],
        zipCode: ['', Validators.required],
      }),
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      isInterviewer: [false],
    });
  }

  onSignUp(): void {
    if (this.userForm.valid) {
      const address: IAddress = {
        street: this.userForm.get('address.street')?.value,
        district: this.userForm.get('address.district')?.value,
        city: this.userForm.get('address.city')?.value,
        zipCode: this.userForm.get('address.zipCode')?.value,
      };

      const role: TRole = this.userForm.get('role')?.value as TRole;

      const requestCreate: IUser = {
        ...this.userForm.value,
        address,
        role,
        isInterviewer: this.userForm.get('isInterviewer')?.value,
      };

      this.signUp.onSignUp(requestCreate).subscribe(
        (response) => {
          this.showSuccessToast();
          this.resetForm();
        },
        (error) => {
          if (error.status === 409) {
            console.warn('Usuário já existe. Lidar com isso conforme necessário.');
            this.showErrorConfltToast();
          } else {
            this.showErrorToast();
          }
        }
      );
    } else {
      console.error('Formulário inválido. Verifique os campos.');
    }
  }

  private resetForm(): void {
    this.userForm.reset(
      {
        name: '',
        surname: '',
        sector: '',
        role: '',
        address: {
          street: '',
          district: '',
          city: '',
          zipCode: '',
        },
        phone: '',
        email: '',
        password: '',
        isInterviewer: false,
      },
      { onlySelf: true, emitEvent: false }
    );

    Object.keys(this.userForm.controls).forEach((key) => {
      this.userForm.get(key)?.markAsPristine();
    });

    Object.keys(this.userForm.get('address')?.value).forEach((key) => {
      this.userForm.get(`address.${key}`)?.markAsPristine();
    });
  }

  private showSuccessToast() {
    this.snackBar.open('Cadastro bem-sucedido!', 'Fechar', {
      duration: 3000,
      panelClass: ['success-toast'],
    });
  }

  private showErrorToast() {
    this.snackBar.open('Erro ao cadastrar. Verifique os campos.', 'Fechar', {
      duration: 3000,
      panelClass: ['error-toast'],
    });
  }

  private showErrorConfltToast() {
    this.snackBar.open('Número de telefone inválido!', 'Fechar', {
      duration: 3000,
      panelClass: ['error-toast'],
    });
  }
}
