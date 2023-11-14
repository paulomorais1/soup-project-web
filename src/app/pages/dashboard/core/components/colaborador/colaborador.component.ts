import { Component } from '@angular/core';

@Component({
  selector: 'app-colaborador',
  template: `
    <app-page-header icon="person_add">
      <h2>Adicionar Colaborador</h2>

      <button routerLink="/dashboard/register-beneficiary" mat-flat-button color="primary" class="action">
        <mat-icon class="mr-2">home</mat-icon>
        <span>Go Beneficiario</span>
      </button>
    </app-page-header>

    <div style="padding: 0 20px">
      Hello from info
    </div>
  `
})
export class ColaboradorComponent {}
