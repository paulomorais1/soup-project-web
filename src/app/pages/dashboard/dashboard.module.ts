// dashboard.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeaderComponent } from './core/components/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardSidebarComponent } from './core/components/header/sidebar/sidebar.component';
import { MenuItemComponent } from './core/components/header/sidebar/menu-item/menu-item.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { PageHeaderComponent } from './core/components/header/page-header/page-header.component';
import { BeneficiaryComponent } from './core/components/beneficiary/beneficiary.component';
import { ColaboradorComponent } from './core/components/colaborador/colaborador.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormColaboradorComponent } from './core/components/colaborador/cadastrar/form-colaborador.component';
import { BeneficiaryFormComponent } from './core/components/beneficiary/cadastrar/form-beneficiary.component';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BeneficiaryListComponent } from './core/components/beneficiary/list of beneficiaries/list-beneficiaries.component';
import { MatTableModule } from '@angular/material/table';
import { ListBeneficiaryComponent } from './core/components/beneficiary/list-all.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GetAllBeneficiaryService } from 'app/resources/models/services/beneficiaries/get-all/getAll-beneficiary.service';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    DashboardSidebarComponent,
    MenuItemComponent,
    PageHeaderComponent,
    BeneficiaryComponent,
    ColaboradorComponent,
    FormColaboradorComponent,
    BeneficiaryFormComponent,
    BeneficiaryListComponent,
    ListBeneficiaryComponent
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatListModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule
  ],
  providers:[GetAllBeneficiaryService]
})
export class DashboardModule {}
