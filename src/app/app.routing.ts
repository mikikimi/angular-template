import { Routes } from '@angular/router';
import { IndexComponent } from '@pages/index/index.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: { title: 'English Stuffs' }
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
    path: 'others',
    loadChildren: './pages/others/others.module#OthersModule'
  }
];
