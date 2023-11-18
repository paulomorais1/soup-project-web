import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from 'app/resources/models/services/user/create/sign-up.service';
import { IUser, IAddress, TRole } from 'app/resources/models/user.models';

@Component({
  selector: 'app-form-colaborador',
  templateUrl: './form-colaborador.component.html',
  styleUrls: ['./form-colaborador.component.scss'],
})
export class FormColaboradorComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private signUp: SignUpService) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      sector: ['', Validators.required],
      role: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        district: ['', Validators.required],
        city: ['', Validators.required],
        zipCode: ['', Validators.required],
      }),
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      isInterviewer: [false], // Certifique-se de fornecer um valor padrão adequado
    });
  }

  onSignUp(): void {
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
        isInterviewer: this.userForm.get('isInterviewer')?.value,
      };

      this.signUp.onSignUp(requestCreate).subscribe(
        (response) => {
          console.log('Cadastro bem-sucedido:');
        },
        (error) => {
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
    }
  }
}
