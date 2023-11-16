/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { GetFieldErrorMessageService } from '@shared/services';

import {
  IAddress,
  IBeneficiary,
  IHousingCondition,
  IHome,
  IFamilyScholarship,
  IReceivePension,
  ICompositionFamily,
  IHasincome,
  ISpecialNeeds,
  IResidentHasIllness,
} from 'app/resources/models/create-beneficiary.models';
import { BeneficiaryService } from 'app/resources/models/services/beneficiary-service';

@Component({
  selector: 'app-form-beneficiary',
  templateUrl: './form-beneficiary.component.html',
  styleUrls: ['./form-beneficiary.component.scss'],
})
export class BeneficiaryFormComponent {
  @ViewChild('deliveryDatePicker') deliveryDatePicker!: MatDatepicker<any>;
  @ViewChild('deliveryDatePicker') dateOfBirthPicker!: MatDatepicker<any>;
  beneficiaryForm: FormGroup;

  get compositionFamilyControls() {
    return (this.beneficiaryForm.get('compositionFamily') as FormArray)
      .controls;
  }
  getFamilyMemberControl(index: number, controlName: string) {
    return (this.compositionFamilyControls[index] as FormGroup).get(
      controlName
    );
  }
  constructor(
    private fb: FormBuilder,
    private beneficiaryService: BeneficiaryService,
    private getFieldErrorMessageService: GetFieldErrorMessageService
  ) {
    this.beneficiaryForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      surname: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      familyReceivepension: ['', Validators.required],
      valuePension: [''],
      rg: ['', Validators.required],
      cpf: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      district: ['', Validators.required],
      housingCondition: ['', Validators.required],
      value: ['', Validators.required],
      professionFamilyresponsible: [null, Validators.required],
      familyStatus: ['', Validators.required],
      familyValue: [''],
      statusPension: ['', Validators.required],
      valueReceive: [''],
      compositionFamily: this.fb.array([this.createFamilyMember()]),
      basicBasketDeliveryDate: ['', Validators.required],
      statusIllness: ['', Validators.required],
      which: ['', [Validators.required]],
      additionalDetails: ['', Validators.required],
      interviewer: [false],
    });
  }

  addFamilyMember(): void {
    const compositionFamilyArray = this.beneficiaryForm.get(
      'compositionFamily'
    ) as FormArray;
    compositionFamilyArray.push(this.createFamilyMember());
  }

  createFamilyMember(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      surname: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      kinship: ['', Validators.required],
      age: ['', Validators.required],
      profession: ['', Validators.required],
      statusHasincome: [''],
      valueHasincome: [''],
      statusSpecialNeeds: ['', Validators.required],
      whatDisability: [''],
    });
  }

  removeFamilyMember(index: number): void {
    const compositionFamilyArray = this.beneficiaryForm.get(
      'compositionFamily'
    ) as FormArray;
    compositionFamilyArray.removeAt(index);
  }

  getErrorMessage(fieldName: string) {
    return this.getFieldErrorMessageService.getErrorMessage(fieldName, this.beneficiaryForm);
  }

  onSubmitBn(): void {
    
    if (this.beneficiaryForm.valid) {
      const address: IAddress = {
        street: this.beneficiaryForm.get('street')?.value,
        city: this.beneficiaryForm.get('city')?.value,
        zipCode: this.beneficiaryForm.get('zipCode')?.value,
        district: this.beneficiaryForm.get('district')?.value,
      };

      const housingCondition: IHousingCondition = this.beneficiaryForm.get(
        'housingCondition'
      )?.value as IHousingCondition;

      const home: IHome = {
        housingCondition: this.beneficiaryForm.get('housingCondition')?.value,
        value: this.beneficiaryForm.get('value')?.value,
      };

      const familyScholarship: IFamilyScholarship = {
        familyStatus: this.beneficiaryForm.get('familyStatus')?.value,
        familyValue: this.beneficiaryForm.get('familyValue')?.value,
      };
      const receivePension: IReceivePension = {
        statusPension: this.beneficiaryForm.get('statusPension')?.value,
        valueReceive: this.beneficiaryForm.get('valueReceive')?.value,
      };

      const compositionFamily: ICompositionFamily[] = this.beneficiaryForm.get(
        'compositionFamily'
      )?.value as ICompositionFamily[];

      const residentHasIllness: IResidentHasIllness = {
        statusIllness: this.beneficiaryForm.get('statusIllness')?.value,
        which: this.beneficiaryForm.get('which')?.value,
      };
      const hasincome: IHasincome = {
        statusHasincome: this.beneficiaryForm.get('status')?.value,
        valueHasincome: this.beneficiaryForm.get('value')?.value,
      };
      const specialNeeds: ISpecialNeeds = {
        statusSpecialNeeds: this.beneficiaryForm.get('status')?.value,
        whatDisability: this.beneficiaryForm.get('whatDisability')?.value,
      };
      const requestCreate: IBeneficiary = {
        ...this.beneficiaryForm.value,
        address,
        home,
        housingCondition,
        familyScholarship,
        receivePension,
        compositionFamily,
        residentHasIllness,
        hasincome,
        specialNeeds,
        isInterviewer: this.beneficiaryForm.get('interviewer')?.value,
      };

      this.beneficiaryService.onSubmitBn(requestCreate).subscribe(
        (response) => {
          console.log('Resposta do backend:', response);
          console.log('Cadastro bem-sucedido:', response);
        },
        (error) => {
          console.error('Erro ao cadastrar:', error);
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
      console.warn('Formulário inválido. Não enviado para a API.');

      // Adicione logs para identificar controles inválidos e os erros específicos
      Object.keys(this.beneficiaryForm.controls).forEach((controlName) => {
        const control = this.beneficiaryForm.get(controlName);
        if (control?.invalid) {
          console.log(`Controle inválido: ${controlName}`);
          console.log(`Erros: ${JSON.stringify(control.errors)}`);
        }
      });
    }
  }
}
