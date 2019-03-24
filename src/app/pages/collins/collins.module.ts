import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollinsRoutes } from '@pages/collins/collins.routing';
import { CollinsComponent } from '@pages/collins/collins.component';
import { EnglishForLifeB2Component } from './english-for-life-b2/english-for-life-b2.component';
import {SharedModule} from '@shared/shared.module';
import { EnglishForLifeB1Component } from './english-for-life-b1/english-for-life-b1.component';
import { EnglishForLifeA2Component } from './english-for-life-a2/english-for-life-a2.component';
import { EnglishForBusinessSpeakingComponent } from './english-for-business-speaking/english-for-business-speaking.component';
import { EnglishConversationBookTwoComponent } from './english-conversation-book-two/english-conversation-book-two.component';
import { CollinsForIeltsSpeakingComponent } from './collins-for-ielts-speaking/collins-for-ielts-speaking.component';

@NgModule({
  declarations: [
    CollinsComponent,
    EnglishForLifeB2Component,
    EnglishForLifeB1Component,
    EnglishForLifeA2Component,
    EnglishForBusinessSpeakingComponent,
    EnglishConversationBookTwoComponent,
    CollinsForIeltsSpeakingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CollinsRoutes),
    SharedModule
  ]
})
export class CollinsModule { }
