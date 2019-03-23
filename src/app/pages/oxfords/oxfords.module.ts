import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { OxfordsComponent } from '@pages/oxfords/oxfords.component';
import { OxfordsRoutes } from '@pages/oxfords/oxfords.routing';

@NgModule({
  declarations: [
    OxfordsComponent
  ],
  imports: [
    RouterModule.forChild(OxfordsRoutes),
    SharedModule
  ]
})
export class OxfordsModule { }
