import { Routes } from '@angular/router';
import { OxfordsComponent } from '@pages/oxfords/oxfords.component';
import { MeetingComponent } from '@pages/oxfords/meeting/meeting.component';
import { NegotiatingComponent } from '@pages/oxfords/negotiating/negotiating.component';
import { SocializingComponent } from '@pages/oxfords/socializing/socializing.component';
import { TelephoningComponent } from '@pages/oxfords/telephoning/telephoning.component';
import { ReadNDiscoverComponent } from '@pages/oxfords/read-n-discover/read-n-discover.component';
import { BaseURLs, OxfordURLsNoPrefix } from 'app/routes';

export const OxfordsRoutes: Routes = [
  {
    path: '',
    component: OxfordsComponent,
    data: { title: 'Oxfords Main' }
  }, {
    path: OxfordURLsNoPrefix.meeting,
    component: MeetingComponent,
    data: { title: 'Oxfords Meeting' }
  }, {
    path: OxfordURLsNoPrefix.negotiating,
    component: NegotiatingComponent,
    data: { title: 'Oxfords Negotiating' }
  }, {
    path: OxfordURLsNoPrefix.socializing,
    component: SocializingComponent,
    data: { title: 'Oxfords Socializing' }
  }, {
    path: OxfordURLsNoPrefix.telephoning,
    component: TelephoningComponent,
    data: { title: 'Oxfords Telephoning' }
  }, {
    path: OxfordURLsNoPrefix.readNDiscover,
    component: ReadNDiscoverComponent,
    data: { title: 'Oxfords Read and Discover' }
  }
];
