import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlueupRoutes } from '@pages/blueup/blueup.routing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(BlueupRoutes)
  ]
})
export class BlueupModule { }
