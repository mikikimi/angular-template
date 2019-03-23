import { Routes } from '@angular/router';
import { OthersComponent } from '@pages/others/others.component';

export const OthersRoutes: Routes = [
  {
    path: '',
    component: OthersComponent,
    data: { title: 'Others' }
  }
];
