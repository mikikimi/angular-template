import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { OxfordsComponent } from '@pages/oxfords/oxfords.component';
import { OxfordsRoutes } from '@pages/oxfords/oxfords.routing';
import { ReadNDiscoverComponent } from './read-n-discover/read-n-discover.component';
import { NegotiatingComponent } from './negotiating/negotiating.component';
import { TelephoningComponent } from './telephoning/telephoning.component';
import { MeetingComponent } from './meeting/meeting.component';
import { SocializingComponent } from './socializing/socializing.component';
import { ReadNDiscoverDetailComponent } from './read-n-discover/read-n-discover-detail.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    OxfordsComponent,
    ReadNDiscoverComponent,
    NegotiatingComponent,
    TelephoningComponent,
    MeetingComponent,
    SocializingComponent,
    ReadNDiscoverDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(OxfordsRoutes),
    SharedModule
  ]
})
export class OxfordsModule { }
