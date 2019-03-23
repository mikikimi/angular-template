import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from 'app/app.routing';

import { AppComponent } from './app.component';
import { SharedComponent } from '@shared/shared.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { MainFooterComponent } from '@components/main-footer/main-footer.component';
import { MainHeaderComponent } from '@components/main-header/main-header.component';
import { MasterIndexComponent } from '@pages/master-index/master-index.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MasterIndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SharedModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
