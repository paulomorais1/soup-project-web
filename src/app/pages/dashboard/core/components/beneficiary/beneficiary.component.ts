import { Component } from '@angular/core';

@Component({
  selector: 'app-beneficiary',
  template: `
    <app-page-header icon="person_add">
      <h2>Cadastrar Benficiario </h2>

      <button routerLink="/dashboard/register-colaborador" mat-flat-button color="primary" class="action">
        <mat-icon class="mr-2">home</mat-icon>
        <span>Go Colaborador</span>
      </button>
    </app-page-header>

    <div style="padding: 0 20px">
      Hello from Sales
    </div>
  `
})
export class BeneficiaryComponent {}
