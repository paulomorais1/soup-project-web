import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBeneficiary } from 'app/resources/models/beneficiary.models';


@Component({
  selector: 'app-beneficiary-details-modal',
  templateUrl: './beneficiary-details-modal.component.html',
})
export class BeneficiaryDetailsModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IBeneficiary,
) {}

 
  getJsonData(): string {
    return JSON.stringify(this.data, null, 2); // O segundo parâmetro (null) são os replacers e o terceiro (2) é o espaço de recuo para formatação.
  }
}
