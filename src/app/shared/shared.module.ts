import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetatagService } from '@shared/services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    MetatagService
  ]
})

export class SharedModule { }
