/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar'; // Importe o MatSnackBar
import { GetFieldErrorMessageService } from '@shared/services';

import { Router } from '@angular/router';
import { LoginService } from 'app/resources/models/services/user/sign-in/login.service';

@Component({
  standalone: true,
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})

export class FormSectionComponent {
  formGroup: FormGroup;
  requestLogin: { phone: string; password: string };
  showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private getFieldErrorMessageService: GetFieldErrorMessageService,
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar // Injete o MatSnackBar
  ) {
    this.formGroup = this.formBuilder.group({
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
    this.requestLogin = { phone: '', password: '' };
  }

  onToggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  

  getErrorMessage(fieldName: string) {
    return this.getFieldErrorMessageService.getErrorMessage(
      fieldName,
      this.formGroup
    );
  }

  public doLogin(): void {
    this.loginService.doLogin(this.requestLogin!).subscribe(
      () => {
        this.router.navigate(['dashboard']);
        this.showSuccessToast();
      },
      (error) => {
        console.error(error);
        this.showErrorToast();
      }
    );
  }

  private showSuccessToast() {
    this.snackBar.open('Login bem-sucedido!', 'Fechar', {
      duration: 3000,
      panelClass: ['success-toast'], // Adicione uma classe CSS para personalizar o estilo do toast
    });
  }

  private showErrorToast() {
    this.snackBar.open('Erro ao fazer login. Verifique suas credenciais.', 'Fechar', {
      duration: 3000,
      panelClass: ['error-toast'],
    });
  }
}
