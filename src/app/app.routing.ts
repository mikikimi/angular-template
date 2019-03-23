import { Routes } from '@angular/router';
import { MasterIndexComponent } from '@pages/master-index/master-index.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: MasterIndexComponent,
    data: { title: 'Master Index of English Stuffs' }
  },
  {
    path: 'blueup',
    loadChildren: './pages/blueup/blueup.module#BlueupModule'
  },
  {
    path: 'collins',
    loadChildren: './pages/collins/collins.module#CollinsModule'
  },
  {
    path: 'effortless-english',
    loadChildren: './pages/effortless-english/effortless-english.module#EffortlessEnglishModule'
  },
  {
    path: 'oxfords',
    loadChildren: './pages/oxfords/oxfords.module#OxfordsModule'
  },
  {
    path: 'ielts',
    loadChildren: './pages/others/others.module#OthersModule'
  },
  {
    path: 'others',
    loadChildren: './pages/others/others.module#OthersModule'
  }
];
