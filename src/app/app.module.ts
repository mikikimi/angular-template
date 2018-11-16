import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from 'app/app.routing';

import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared/shared.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainHeaderComponent } from '@components/main-header/main-header.component';
import { MainFooterComponent } from '@components/main-footer/main-footer.component';
import { IndexComponent } from '@pages//index/index.component';
import { BlueupComponent } from '@pages//blueup/blueup.component';
import { CollinsComponent } from '@pages//collins/collins.component';
import { OthersComponent } from '@pages//others/others.component';
import { EffortlessEnglishComponent } from '@pages//effortless-english/effortless-english.component';
import { SharedModule } from '@shared/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    MainHeaderComponent,
    MainFooterComponent,
    IndexComponent,
    BlueupComponent,
    CollinsComponent,
    OthersComponent,
    EffortlessEnglishComponent
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
