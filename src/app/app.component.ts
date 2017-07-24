import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any ;

  constructor(platform: Platform, statusBar: StatusBar, public storage: Storage) {
    //this.storage.clear();
    this.storage.get('hasRegister').then((hasRegister) => {
      if(hasRegister){
        this.rootPage = LoginPage;
      }else{
        this.rootPage = RegisterPage;
      }
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
    })
  });
  }
}
  