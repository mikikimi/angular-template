import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffortlessEnglishRoutes } from '@pages/effortless-english/effortless-english.routing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(EffortlessEnglishRoutes)
  ]
})
export class EffortlessEnglishModule { }
