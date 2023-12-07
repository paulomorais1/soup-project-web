import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  private isSubmitting = false;

  get compositionFamilyControls() {
    return (this.beneficiaryForm.get('compositionFamily') as FormArray)
      .controls;
  }

  constructor(
    private fb: FormBuilder,
    private beneficiaryService: CreateBeneficiaryService,
    private getFieldErrorMessageService: GetFieldErrorMessageService,
    private snackBar: MatSnackBar
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
  
  SubmitCreate(): void {
    if (this.beneficiaryForm.valid) {
      if (this.isSubmitting) {
        console.warn('Solicitação já enviada. Aguardando resposta.');
        return;
      }

      this.isSubmitting = true;

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

      this.beneficiaryService.SubmitCreate(requestCreate).subscribe(
        (response) => {
          this.showSuccessToast();
          this.resetForm();
          this.isSubmitting = false;
        },
        (error) => {
          console.error('Erro ao cadastrar beneficiário:', error);

          if (error.status === 409) {
            console.warn(
              'Usuário já existe. Lidar com isso conforme necessário.'
            );
            this.showExistingCpfToast();
          }

          this.isSubmitting = false;
          this.showErrorToast();
        }
      );
    } else {
      this.showErrorToast();
    }
  }

  private resetForm(): void {
    this.beneficiaryForm.reset({
      name: '',
      surname: '',
      phoneNumber: '',
      familyReceivepension: {
        statusPension: 'Não',
        valuePension: '',
      },
      rg: '',
      cpf: '',
      dateOfBirth: '',
      address: {
        street: '',
        district: '',
        city: '',
        zipCode: '',
      },
      home: {
        housingCondition: 'Não',
        value: '',
      },
      professionFamilyresponsible: null,
      familyScholarship: {
        familyStatus: 'Não',
        familyValue: '',
      },
      receivePension: {
        statusPension: 'Não',
        valueReceive: '',
      },
      compositionFamily: [this.createFamilyMember()],
      basicBasketDeliveryDate: '',
      residentHasIllness: {
        statusIllness: 'Não',
        which: '',
      },
      additionalDetails: '',
      interviewer: false,
    }, { onlySelf: true, emitEvent: false });
  
    
  this.beneficiaryForm.markAsPristine();
  this.beneficiaryForm.markAsUntouched();

  this.compositionFamilyControls.forEach((control) => {
    control.reset();
    control.markAsPristine();
    control.markAsUntouched();
  });

  Object.keys(this.beneficiaryForm.controls).forEach((key) => {
    const control = this.beneficiaryForm.get(key);
    if (control) {
      control.updateValueAndValidity();
    }
  });

  Object.keys(this.beneficiaryForm.get('address')?.value).forEach((key) => {
    const control = this.beneficiaryForm.get(`address.${key}`);
    if (control) {
      control.updateValueAndValidity();
    }
  });
}
  getFamilyMemberControl(index: number, controlName: string) {
    const familyMember = (this.beneficiaryForm.get('compositionFamily') as FormArray)
      .at(index) as FormGroup;
    return familyMember.get(controlName)?.value;
  }
  
  
  private showSuccessToast() {
    this.snackBar.open('Cadastrado com Sucesso', 'Fechar', {
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

  private showExistingCpfToast() {
    this.snackBar.open('CPF já existe. Verifique o CPF inserido.', 'Fechar', {
      duration: 3000,
      panelClass: ['error-toast'],
    });
  }
}
