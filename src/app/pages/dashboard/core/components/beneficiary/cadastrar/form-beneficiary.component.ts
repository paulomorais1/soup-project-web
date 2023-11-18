/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
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
  iFamilyReceivepension,
} from 'app/resources/models/beneficiary.models';
import { CreateBeneficiaryService } from 'app/resources/models/services/beneficiaries/create/beneficiary-service';

@Component({
  selector: 'app-form-beneficiary',
  templateUrl: './form-beneficiary.component.html',
  styleUrls: ['./form-beneficiary.component.scss'],
})
export class BeneficiaryFormComponent {
  @ViewChild('deliveryDatePicker') deliveryDatePicker!: MatDatepicker<any>;
  @ViewChild('dateOfBirthPicker') dateOfBirthPicker!: MatDatepicker<any>;
  beneficiaryForm: FormGroup;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  // Variável para rastrear se a solicitação está em andamento
  private isSubmitting = false;

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
    private beneficiaryService: CreateBeneficiaryService,
    private getFieldErrorMessageService: GetFieldErrorMessageService,
    private matSnackBar: MatSnackBar
  ) {
    this.beneficiaryForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      surname: ['', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      familyReceivepension: this.fb.group({
        statusPension: ['Não', Validators.required],
        valuePension: ['', [Validators.pattern(/^\d+$/)]],
      }),
      rg: ['', Validators.required],
      cpf: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        district: ['', Validators.required],
        city: ['', Validators.required],
        zipCode: ['', Validators.required],
      }),
      home: this.fb.group({
        housingCondition: ['Não', Validators.required],
        value: ['', Validators.required],
      }),
      professionFamilyresponsible: [null, Validators.required],
      familyScholarship: this.fb.group({
        familyStatus: ['Não', Validators.required],
        familyValue: ['', [Validators.pattern(/^\d+$/)]],
      }),
      receivePension: this.fb.group({
        statusPension: ['Não', Validators.required],
        valueReceive: ['', [Validators.pattern(/^\d+$/)]],
      }),
      compositionFamily: this.fb.array([this.createFamilyMember()]),
      basicBasketDeliveryDate: ['', Validators.required],
      residentHasIllness: this.fb.group({
        statusIllness: ['Não', Validators.required],
        which: [''],
      }),
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
      hasincome: this.fb.group({
        statusHasincome: [''],
        valueHasincome: [''],
      }),
      specialNeeds: this.fb.group({
        statusSpecialNeeds: ['', Validators.required],
        whatDisability: [''],
      }),
    });
  }

  removeFamilyMember(index: number): void {
    const compositionFamilyArray = this.beneficiaryForm.get(
      'compositionFamily'
    ) as FormArray;
    compositionFamilyArray.removeAt(index);
  }

  getErrorMessage(fieldName: string) {
    return this.getFieldErrorMessageService.getErrorMessage(
      fieldName,
      this.beneficiaryForm
    );
  }

  showToast(message: string) {
    this.matSnackBar.open(message, 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  SubmitCreate(): void {
    if (this.beneficiaryForm.valid) {
      // Verifique se a solicitação já foi enviada
      if (this.isSubmitting) {
        console.warn('Solicitação já enviada. Aguardando resposta.');
        return;
      }

      this.isSubmitting = true; // Adicione uma variável para rastrear se a solicitação está em andamento

      const familyReceivepension: iFamilyReceivepension = {
        statusPension: this.beneficiaryForm.get(
          'familyReceivepension.statusPension'
        )?.value,
        valuePension: this.beneficiaryForm.get(
          'familyReceivepension.valuePension'
        )?.value,
      };

      const address: IAddress = {
        street: this.beneficiaryForm.get('address.street')?.value,
        city: this.beneficiaryForm.get('address.city')?.value,
        zipCode: this.beneficiaryForm.get('address.zipCode')?.value,
        district: this.beneficiaryForm.get('address.district')?.value,
      };

      const housingCondition: IHousingCondition = this.beneficiaryForm.get(
        'home.housingCondition'
      )?.value as IHousingCondition;

      const home: IHome = {
        housingCondition: this.beneficiaryForm.get('home.housingCondition')
          ?.value,
        value: this.beneficiaryForm.get('home.value')?.value,
      };

      const familyScholarship: IFamilyScholarship = {
        familyStatus: this.beneficiaryForm.get('familyScholarship.familyStatus')
          ?.value,
        familyValue: this.beneficiaryForm.get('familyScholarship.familyValue')
          ?.value,
      };
      const receivePension: IReceivePension = {
        statusPension: this.beneficiaryForm.get('receivePension.statusPension')
          ?.value,
        valueReceive: this.beneficiaryForm.get('receivePension.valueReceive')
          ?.value,
      };

      const compositionFamily: ICompositionFamily[] = this.beneficiaryForm.get(
        'compositionFamily'
      )?.value as ICompositionFamily[];

      const residentHasIllness: IResidentHasIllness = {
        statusIllness: this.beneficiaryForm.get(
          'residentHasIllness.statusIllness'
        )?.value,
        which: this.beneficiaryForm.get('residentHasIllness.which')?.value,
      };
      const hasincome: IHasincome = {
        statusHasincome: this.beneficiaryForm.get('hasincome.statusHasincome')
          ?.value,
        valueHasincome: this.beneficiaryForm.get('hasincome.valueHasincome')
          ?.value,
      };
      const specialNeeds: ISpecialNeeds = {
        statusSpecialNeeds: this.beneficiaryForm.get(
          'specialNeeds.statusSpecialNeeds'
        )?.value,
        whatDisability: this.beneficiaryForm.get('specialNeeds.whatDisability')
          ?.value,
      };
      const requestCreate: IBeneficiary = {
        ...this.beneficiaryForm.value,
        familyReceivepension,
        address,
        home,
        familyScholarship,
        receivePension,
        compositionFamily,
        residentHasIllness,
      };
      console.log(
        'Enviando requisição para cadastrar beneficiário:',
        requestCreate
      );

      this.beneficiaryService.SubmitCreate(requestCreate).subscribe(
        (response) => {
          console.log('Resposta ao cadastrar beneficiário:', response);
          this.showToast('Cadastrado com sucesso!');
          this.isSubmitting = false; // Resetar o indicador após o sucesso
        },
        (error) => {
          console.error('Erro ao cadastrar beneficiário:', error);

          if (error.status === 409) {
            console.warn(
              'Usuário já existe. Lidar com isso conforme necessário.'
            );
          }

          this.isSubmitting = false; // Resetar o indicador após um erro
        }
      );
    } else {
      this.showToast('Preencha os campos necessários!!');
    }

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
