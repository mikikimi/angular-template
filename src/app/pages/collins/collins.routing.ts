import { Routes } from '@angular/router';
import { CollinsComponent } from '@pages/collins/collins.component';
import { EffortlessEnglishComponent } from '@pages/effortless-english/effortless-english.component';

export const CollinsRoutes: Routes = [
  {
    path: '',
    component: CollinsComponent,
    data: { title: 'Collins' }
  }
];
