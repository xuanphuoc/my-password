import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard'

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { AddFormPage } from '../pages/add-form/add-form';
import { PopoverPage } from '../pages/popover/popover';


import { UserDataProvider } from '../providers/user-data/user-data';

import { IonicStorageModule } from '@ionic/storage';
import { DatabaseProvider } from '../providers/database/database';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { ItemPopoverPage} from '../pages/popover/item-popover';
import { AboutPage} from '../pages/about/about';
import {DatabasePage} from '../pages/database/database';
import { SecurityPage} from '../pages/security/security';
import { AppearencePage } from '../pages/appearence/appearence';

import { ChangPasswordPage } from '../pages/chang-password/chang-password';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    AddFormPage,
    PopoverPage,
    ItemDetailPage,
    ItemPopoverPage,
    AboutPage,
    DatabasePage,
    SecurityPage,
    AppearencePage,
    ChangPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    AddFormPage,
    PopoverPage,
    ItemDetailPage,
    ItemPopoverPage,
    AboutPage,
    DatabasePage,
    SecurityPage,
    AppearencePage,
    ChangPasswordPage
  ],
  providers: [
    StatusBar,
    Keyboard,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserDataProvider,
    DatabaseProvider,
  
  ]
})
export class AppModule { }
