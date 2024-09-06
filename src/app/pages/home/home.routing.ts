import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { InitialSectionComponent } from './components/initial-section/initial-section.component';
import { StatisticsSectionComponent } from './components/statistics-section/statistics-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';

export const HomeRouting: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'initial-section',
        component: InitialSectionComponent,
      },
      {
        path: 'statistics-section',
        component: StatisticsSectionComponent,
      },
      {
        path: 'services-section',
        component: ServicesSectionComponent,
      },
      {
        path: 'contact-section',
        component: ContactSectionComponent,
      },
    ],
  },
];
