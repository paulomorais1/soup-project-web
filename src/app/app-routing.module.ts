import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () => (await import('@pages/home/home.module')).HomeModule
  },
  {
    path: 'transparency',
    loadChildren: async () => (await import('@pages/transparency/transparency.module')).TransparencyModule
  },
  {
    path: 'sign-in',
    loadChildren: async () => (await import('@pages/sign-in/sign-in.module')).SignInModule
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
