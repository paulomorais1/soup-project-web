import { Component } from '@angular/core';

@Component({
  selector: 'app-beneficiary',
  template: `
    <app-page-header icon="person_add">
      <h2>Cadastrar Benficiário </h2>

      <button routerLink="/dashboard/getAll-beneficiary" mat-flat-button color="primary" class="action">
        <mat-icon class="mr-2">home</mat-icon>
        <span color="primary">Listar </span>
      </button>
    </app-page-header>

    <div style="padding: 0 20px">
    <app-form-beneficiary></app-form-beneficiary>
    </div>
  `
})
export class BeneficiaryComponent {}
