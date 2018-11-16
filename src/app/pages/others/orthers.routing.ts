import { Routes } from '@angular/router';
import { OthersComponent } from '@pages/others/others.component';
import { OxfordsComponent } from '@pages/oxfords/oxfords.component';

export const OthersRoutes: Routes = [
  {
    path: '',
    component: OthersComponent,
    data: { title: 'Others' }
  }
];
