import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OthersRoutes } from '@pages/others/orthers.routing';
import { OthersComponent } from '@pages/others/others.component';

@NgModule({
  declarations: [
    OthersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(OthersRoutes)
  ]
})
export class OthersModule { }
