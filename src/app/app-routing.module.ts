import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { SignInComponent } from '@pages/sign-in/sign-in.component';
import { AuthGuardService } from './resources/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () =>
      (await import('@pages/home/home.module')).HomeModule,
  },
  {
    path: 'transparency',
    loadChildren: async () =>
      (await import('@pages/transparency/transparency.module'))
        .TransparencyModule,
  },
  {
    path: 'sign-in',
    loadChildren: async () =>
      (await import('@pages/sign-in/sign-in.module')).SignInModule,
  },
  { path: '', component: SignInComponent },
  {
    path: 'dashboard',
    canActivateChild: [AuthGuardService],
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  { path: '**', redirectTo: '' },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
