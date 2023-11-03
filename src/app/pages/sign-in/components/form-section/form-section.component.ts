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
import { GetFieldErrorMessageService } from '@shared/services';
import { LoginService } from 'app/resources/models/services/login.service';
import { RequestLogin } from 'app/resources/models/RequestLogin';

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
  requestLogin: { phone: string, password: string }; // Adicione esta propriedade
  showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private getFieldErrorMessageService: GetFieldErrorMessageService,
    private loginService: LoginService
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
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
