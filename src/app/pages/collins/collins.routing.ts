import {Routes} from '@angular/router';
import {CollinsComponent} from '@pages/collins/collins.component';
import {CollinsURLsNoPrefix} from '../../routes';
import {EnglishForLifeB2Component} from '@pages/collins/english-for-life-b2/english-for-life-b2.component';
import {EnglishForLifeB1Component} from '@pages/collins/english-for-life-b1/english-for-life-b1.component';
import {EnglishForLifeA2Component} from '@pages/collins/english-for-life-a2/english-for-life-a2.component';

export const CollinsRoutes: Routes = [
  {
    path: '',
    component: CollinsComponent,
    data: { title: 'Collins Main' }
  }, {
    path: CollinsURLsNoPrefix.englishForLifeA2,
    component: EnglishForLifeA2Component,
    data: { title: 'Collins English For Life A2' }
  }, {
    path: CollinsURLsNoPrefix.englishForLifeB1,
    component: EnglishForLifeB1Component,
    data: { title: 'Collins English For Life B1' }
  }, {
    path: CollinsURLsNoPrefix.englishForLifeB2,
    component: EnglishForLifeB2Component,
    data: { title: 'Collins English For Life B2' }
  }
];
