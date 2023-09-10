import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRouting } from '@pages/home/home.routing';
import { HomeComponent } from '@pages/home/home.component';
import { InitialSectionComponent } from '@pages/home/components/initial-section/initial-section.component';
import { StatisticsSectionComponent } from '@pages/home/components/statistics-section/statistics-section.component';
import { ServicesSectionComponent } from '@pages/home/components/services-section/services-section.component';
import { ContactSectionComponent } from '@pages/home/components/contact-section/contact-section.component';

@NgModule({
  declarations: [
    HomeComponent,
    InitialSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRouting),
    StatisticsSectionComponent,
    ServicesSectionComponent,
    ContactSectionComponent
  ]
})

export class HomeModule { }
