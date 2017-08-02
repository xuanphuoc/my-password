import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { PersonPage } from '../pages/person/person';
import { AddFormPage } from '../pages/add-form/add-form';


import { UserDataProvider } from '../providers/user-data/user-data';
import { DatabaseProvider } from '../providers/database/database';


import { IonicStorageModule } from '@ionic/storage';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { ItemPopoverPage } from '../pages/popover/item-popover';
import { AboutPage } from '../pages/about/about';
import { DatabasePage } from '../pages/database/database';
import { SecurityPage } from '../pages/security/security';
import { AppearencePage } from '../pages/appearence/appearence';

import { ChangPasswordPage } from '../pages/chang-password/chang-password';
import { PersonalOptionPage } from '../pages/personal-option/personal-option';
import {SocialOptionPage} from '../pages/social-option/social-option';
import { WorkOptionPage } from "../pages/work-option/work-option";
import { WorkListPage } from "../pages/work-list/work-list";
import { SocialListPage } from "../pages/social-list/social-list";
import { FavoriteListPage } from "../pages/favorite-list/favorite-list";
import { ImportantListPage } from "../pages/important-list/important-list";


import { SocialSharing} from '@ionic-native/social-sharing';
import { SearchPage } from "../pages/search/search";


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    PersonPage,
    AddFormPage,
    ItemDetailPage,
    ItemPopoverPage,
    AboutPage,
    DatabasePage,
    SecurityPage,
    AppearencePage,
    ChangPasswordPage,
    PersonalOptionPage,
    SocialOptionPage,
    WorkOptionPage,
    WorkListPage,
    SocialListPage,
    FavoriteListPage,
    ImportantListPage,
    SearchPage 

  
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
    PersonPage,
    AddFormPage,
    ItemDetailPage,
    ItemPopoverPage,
    AboutPage,
    DatabasePage,
    SecurityPage,
    AppearencePage,
    ChangPasswordPage,
    PersonalOptionPage,
    SocialOptionPage,
    WorkOptionPage,
    WorkListPage,
    SocialListPage,
    FavoriteListPage,
    ImportantListPage,
    SearchPage 
    
    
  ],
  providers: [
    StatusBar,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserDataProvider,
    DatabaseProvider,
    SocialSharing,
  ]
})
export class AppModule { }
