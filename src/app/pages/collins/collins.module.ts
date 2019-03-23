import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollinsRoutes } from '@pages/collins/collins.routing';
import { CollinsComponent } from '@pages/collins/collins.component';

@NgModule({
  declarations: [
    CollinsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CollinsRoutes)
  ]
})
export class CollinsModule { }
