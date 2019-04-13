import { Component } from '@angular/core';
import { Platform, App, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LandingPage } from '../pages/landing/landing';
import {enableProdMode} from '@angular/core';

enableProdMode();


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LandingPage;


  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public app: App,
    public alertCrtl: AlertController
    ){
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      splashScreen.hide();
      statusBar.styleDefault();
      
    });

   }

  }
