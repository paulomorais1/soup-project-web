import { Component } from '@angular/core';

@Component({
  selector: 'app-list-all',
  template: `
    <app-page-header icon="person_add">
      <h2>Cadastrar Benficiario</h2>

      <button
        routerLink="/dashboard/getAll-beneficiary"
        mat-flat-button
        color="primary"
        class="action"
      >
        <mat-icon class="mr-2">home</mat-icon>
        <span>Go Colaborador</span>
      </button>
    </app-page-header>

    <div style="padding: 0 20px">
      <app-list-beneficiaries></app-list-beneficiaries>
    </div>
  `,
})
export class ListBeneficiaryComponent {}
