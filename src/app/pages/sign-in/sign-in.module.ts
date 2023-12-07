import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BaseLayoutModuleModule } from '@core/modules/base-layout-module/base-layout-module.module';

import { SignInRouting } from '@pages/sign-in/sign-in.routing';
import { SignInComponent } from '@pages/sign-in/sign-in.component';
import { FormSectionComponent } from '@pages/sign-in/components/form-section/form-section.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SignInRouting),
    BaseLayoutModuleModule,
    FormsModule,
    FormSectionComponent,
 
    
  ],
  providers: [
    // ... outros provedores ...
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
  ],
})
export class SignInModule {}
