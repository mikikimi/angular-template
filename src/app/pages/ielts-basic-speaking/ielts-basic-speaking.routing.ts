import { Routes } from '@angular/router';
import { IeltsBasicSpeakingComponent } from '@pages/ielts-basic-speaking/ielts-basic-speaking.component';

export const IeltsBasicSpeakingRoutes: Routes = [
  {
    path: '',
    component: IeltsBasicSpeakingComponent,
    data: { title: 'IELTS Basic Speaking' }
  }
];
