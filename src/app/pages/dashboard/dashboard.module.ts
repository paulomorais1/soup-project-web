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
import { FormColaboradorModule } from './core/components/colaborador/cadastrar/form-colaborador.module';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    DashboardSidebarComponent,
    MenuItemComponent,
    PageHeaderComponent,
    BeneficiaryComponent,
    ColaboradorComponent,
    // FormColaboradorComponent, // Remove this line
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    FormColaboradorModule, // Add this line
  ],
})
export class DashboardModule {}
