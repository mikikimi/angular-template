import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlueupRoutes } from '@pages/blueup/blueup.routing';
import { BlueupComponent } from '@pages/blueup/blueup.component';

@NgModule({
  declarations: [
    BlueupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BlueupRoutes)
  ]
})
export class BlueupModule { }
