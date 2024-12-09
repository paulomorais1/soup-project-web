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
  showPassword = true;
  isSubmitting = false;

  onToggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  constructor(
    private fb: FormBuilder,
    private signUp: SignUpService,
    private snackBar: MatSnackBar
  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      surname: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      role: ['Donation', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        district: ['', Validators.required],
        city: ['', Validators.required],
        zipCode: ['', Validators.required],
      }),
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSignUp(): void {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;

    if (this.userForm.valid) {
      // Criar instâncias de IAddress e TRole
      const address: IAddress = {
        street: this.userForm.get('address.street')?.value,
        district: this.userForm.get('address.district')?.value,
        city: this.userForm.get('address.city')?.value,
        zipCode: this.userForm.get('address.zipCode')?.value,
      };

      const role: TRole = this.userForm.get('role')?.value as TRole;

      // Criar instância de IUser
      const requestCreate: IUser = {
        ...this.userForm.value,
        address,
        role,
      };

      this.signUp.onSignUp(requestCreate).subscribe(
        (response) => {
          console.log('Cadastro bem-sucedido:');
          this.snackBar.open('Cadastro bem-sucedido!', 'Fechar', {
            duration: 3000,
          });
          this.resetForm();
          this.isSubmitting = false;
        },
        (error) => {
          this.isSubmitting = false;
          if (error.status === 409) {
            console.warn(
              'Usuário já existe. Lidar com isso conforme necessário.'
            );
          } else {
            console.error('Erro ao cadastrar:', error);
          }
        }
      );
    } else {
      console.error('Formulário inválido. Verifique os campos.');
      this.logInvalidControls(this.userForm);
      this.isSubmitting = false;
    }
  }

  private logInvalidControls(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      if (control instanceof FormGroup) {
        this.logInvalidControls(control);
      } else if (control && control.invalid) {
        console.log(`Campo inválido: ${key}, Erros: `, control.errors);
      }
    });
  }

  private resetForm() {
    this.userForm.reset();
    // Reatribuir o valor padrão ao campo 'role'
    this.userForm.get('role')?.setValue('Donation');
    // Marcar todos os controles como 'pristine' e 'untouched'
    Object.keys(this.userForm.controls).forEach(key => {
      const control = this.userForm.get(key);
      if (control instanceof FormGroup) {
        Object.keys(control.controls).forEach(subKey => {
          control.get(subKey)?.markAsPristine();
          control.get(subKey)?.markAsUntouched();
        });
      } else {
        control?.markAsPristine();
        control?.markAsUntouched();
      }
    });
  }
}
