import { Routes } from '@angular/router';
import { EffortlessEnglishComponent } from '@pages/effortless-english/effortless-english.component';
import { OxfordsComponent } from '@pages/oxfords/oxfords.component';

export const EffortlessEnglishRoutes: Routes = [
  {
    path: '',
    component: EffortlessEnglishComponent,
    data: { title: 'Effortless English' }
  }
];
