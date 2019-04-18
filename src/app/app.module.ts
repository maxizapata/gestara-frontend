import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { CoopProvider } from '../providers/coop/coop'


import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { MapPage } from '../pages/map/map';
import { LandingPage } from '../pages/landing/landing'
import { CategoriesPage } from '../pages/categories/categories'



@NgModule({
  declarations: [
    MyApp,
    /* ONLY FOR DEV
    MapPage,
    DetailPage,
    HomePage,
    LandingPage,
    CategoriesPage,*/
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
    LandingPage,
    CategoriesPage,
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CoopProvider,
  ],
})
export class AppModule {}
