import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IeltsBasicSpeakingRoutes } from '@pages/ielts-basic-speaking/ielts-basic-speaking.routing';
import { IeltsBasicSpeakingComponent } from '@pages/ielts-basic-speaking/ielts-basic-speaking.component';

@NgModule({
  declarations: [
    IeltsBasicSpeakingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(IeltsBasicSpeakingRoutes)
  ]
})
export class IeltsBasicSpeakingModule { }
