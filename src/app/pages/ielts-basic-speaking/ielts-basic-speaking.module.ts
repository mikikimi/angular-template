import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IeltsBasicSpeakingRoutes } from '@pages/ielts-basic-speaking/ielts-basic-speaking.routing';
import { IeltsBasicSpeakingComponent } from '@pages/ielts-basic-speaking/ielts-basic-speaking.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    IeltsBasicSpeakingComponent
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    RouterModule.forChild(IeltsBasicSpeakingRoutes)
  ]
})
export class IeltsBasicSpeakingModule { }
