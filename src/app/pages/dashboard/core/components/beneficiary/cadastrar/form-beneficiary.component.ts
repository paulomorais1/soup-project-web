import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAddress, IBeneficiary, IHousingCondition, IHome, IFamilyScholarship, IReceivePension } from 'app/resources/models/create-beneficiary.models';
import { BeneficiaryService } from 'app/resources/models/services/beneficiary-service';

@Component({
  selector: 'app-form-beneficiary',
  templateUrl: './form-beneficiary.component.html',
  styleUrls: ['./form-beneficiary.component.scss'],
})
export class BeneficiaryFormComponent {
  beneficiaryForm: FormGroup;

  constructor(private fb: FormBuilder, private beneficiaryService: BeneficiaryService) {
    this.beneficiaryForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      familyReceivepension: ['', Validators.required],
      valuePension: ['', Validators.required],
      rg: ['', Validators.required],
      cpf: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      housingCondition: ['', Validators.required],
      value: [null, Validators.required],
      professionFamilyresponsible: [null, Validators.required],
      status: [null, Validators.required],
      


    });
  }

  onSubmitBn(): void {
    if (this.beneficiaryForm.valid) {
      const address: IAddress = {
        street: this.beneficiaryForm.get('street')?.value,
        city: this.beneficiaryForm.get('city')?.value,
        zipCode: this.beneficiaryForm.get('zipCode')?.value,
      };

      const housingCondition: IHousingCondition = this.beneficiaryForm.get('housingCondition')?.value as IHousingCondition;
      
      const home: IHome = {
        housingCondition: this.beneficiaryForm.get('housingCondition')?.value,
        value: this.beneficiaryForm.get('value')?.value,
      };
      
      const familyScholarship: IFamilyScholarship = {
        status: this.beneficiaryForm.get('status-bolsa-familia')?.value,
        value: this.beneficiaryForm.get('value-bolsa-familia')?.value,
        

      };
      const receivePension: IReceivePension = {
        status: this.beneficiaryForm.get('status-pensao')?.value,
        value: this.beneficiaryForm.get('value-pensao')?.value,
        

      };
      const requestCreate: IBeneficiary = {
        ...this.beneficiaryForm.value,
        address,
        home,
        housingCondition,
        familyScholarship,
        receivePension
      };

      this.beneficiaryService.onSubmitBn(requestCreate).subscribe(
        (response) => {
          console.log('Cadastro bem-sucedido:', response);
        },
        (error) => {
          console.error('Erro ao cadastrar:', error);
        }
      );
    } else {
      console.error('Formulário inválido. Verifique os campos.');
    }
  }
}
