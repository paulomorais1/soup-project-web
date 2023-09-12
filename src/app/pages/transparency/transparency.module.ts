import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BaseLayoutModuleModule } from '@core/modules/base-layout-module/base-layout-module.module';

import { TransparencyRouting } from '@pages/transparency/transparency.routing';
import { TransparencyComponent } from '@pages/transparency/transparency.component';
import { InitialSectionComponent } from '@pages/transparency/components/initial-section/initial-section.component';
import { TermExtractSectionComponent } from '@pages/transparency/components/term-extract-section/term-extract-section.component';
import { DocumentsSectionComponent } from '@pages/transparency/components/documents-section/documents-section.component';

@NgModule({
  declarations: [
    TransparencyComponent,
    TermExtractSectionComponent,
    DocumentsSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(TransparencyRouting),
    BaseLayoutModuleModule,
    InitialSectionComponent
  ]
})

export class TransparencyModule { }
