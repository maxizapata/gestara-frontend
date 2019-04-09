import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'

import { MyApp } from './app.component';
import { CoopProvider } from '../providers/coop/coop'


import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { MapPage } from '../pages/map/map';
import { LandingPage } from '../pages/landing/landing'



@NgModule({
  declarations: [
    MyApp,
    /* ONLY FOR DEV */
    MapPage,
    DetailPage,
    HomePage,
    LandingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    MapPage,
    LandingPage
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CoopProvider,
  ],
})
export class AppModule {}
