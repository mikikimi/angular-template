import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollinsRoutes } from '@pages/collins/collins.routing';
import { CollinsComponent } from '@pages/collins/collins.component';
import { EnglishForLifeB2Component } from './english-for-life-b2/english-for-life-b2.component';
import {SharedModule} from '@shared/shared.module';
import { EnglishForLifeB1Component } from './english-for-life-b1/english-for-life-b1.component';
import { EnglishForLifeA2Component } from './english-for-life-a2/english-for-life-a2.component';

@NgModule({
  declarations: [
    CollinsComponent,
    EnglishForLifeB2Component,
    EnglishForLifeB1Component,
    EnglishForLifeA2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CollinsRoutes),
    SharedModule
  ]
})
export class CollinsModule { }
