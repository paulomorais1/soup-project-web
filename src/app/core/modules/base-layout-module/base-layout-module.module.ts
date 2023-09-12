import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '@core/components/header/header.component';
import { FooterComponent } from '@core/components/footer/footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})

export class BaseLayoutModuleModule { }
