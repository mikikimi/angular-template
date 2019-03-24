import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ScreenshotWithAudioComponent } from '@templates/screenshot-with-audio/screenshot-with-audio.component';
import { ScreenCombineAudioComponent } from '@templates/screen-combine-audio/screen-combine-audio.component';

@NgModule({
  declarations: [
    ScreenshotWithAudioComponent,
    ScreenCombineAudioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot()
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TooltipModule,
    ScreenshotWithAudioComponent,
    ScreenCombineAudioComponent
    // BrowserAnimationsModule
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}

