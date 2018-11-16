import { Routes } from '@angular/router';
import { IndexComponent } from '@pages/index/index.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: { title: 'page_name.index' }
  },
  {
    path: 'bluep',
    loadChildren: './pages/static-pages.module#StaticPagesModule'
  },
  {
    path: 'oxfords',
    loadChildren: './pages/oxfords/oxfords.module#OxfordsModule'
  }
];
