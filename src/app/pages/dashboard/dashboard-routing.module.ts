// dashboard-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BeneficiaryComponent } from './core/components/beneficiary/beneficiary.component';
import { ColaboradorComponent } from './core/components/colaborador/colaborador.component';
import { ListBeneficiaryComponent } from './core/components/beneficiary/list-all.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'register-colaborador',
        component: ColaboradorComponent,
      },
      {
        path: 'getAll-beneficiary',
        component: ListBeneficiaryComponent,
      },
      {
        path: 'register-beneficiary',
        component: BeneficiaryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
