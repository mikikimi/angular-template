import { Routes } from '@angular/router';
import { BlueupComponent } from '@pages/blueup/blueup.component';
import { EffortlessEnglishComponent } from '@pages/effortless-english/effortless-english.component';

export const BlueupRoutes: Routes = [
  {
    path: '',
    component: BlueupComponent,
    data: { title: 'Blueup' }
  }
];
