import { Component, ViewChild } from '@angular/core';
import { Platform, Nav,App} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Storage } from '@ionic/storage';

import { PersonPage } from '../pages/person/person';

import { AppearencePage } from '../pages/appearence/appearence';
import { AboutPage } from '../pages/about/about';
import { DatabasePage } from '../pages/database/database';
import { SecurityPage } from '../pages/security/security';

import { WorkListPage } from "../pages/work-list/work-list";
import { SocialListPage } from "../pages/social-list/social-list";
import { ItemDetailPage } from "../pages/item-detail/item-detail";
import { FavoriteListPage } from "../pages/favorite-list/favorite-list";
import { ImportantListPage } from "../pages/important-list/important-list";
// import { AddFormPage } from '../pages/add-form/add-form';
// import { PersonalOptionPage } from '../pages/personal-option/personal-option';

// import {SocialOptionPage} from '../pages/social-option/social-option';
// import { WorkOptionPage } from "../pages/work-option/work-option";



export interface MenuOption {
  title: string;
  name: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any ;

  typeList: MenuOption[] = [
    { title: 'Yourself', component: PersonPage, name: 'PersonPage', icon: 'person' },
    { title: 'Works', component: WorkListPage, name: 'WorkListPage', icon: 'briefcase' },
    { title: 'Social', component: SocialListPage, name: 'SocialListPage', icon: 'globe' },
    { title: 'Favorite', component: FavoriteListPage, name: 'FavoriteListPage', icon: 'star' },
    { title: 'Important', component: ImportantListPage, name: 'ImportantListPage', icon: 'lock' }
  ];
  settingList: MenuOption[] = [
    { title: 'Appearence', component: AppearencePage, name: 'popular', icon: 'eye' },
    { title: 'Security', component: SecurityPage, name: 'popular', icon: 'lock' },
  ]

  constructor(public appCtrl: App, public platform: Platform, statusBar: StatusBar, public storage: Storage) {
    // this.storage.clear();
    this.storage.get('hasRegister').then((hasRegister) => {
      if (hasRegister) {
        this.rootPage = LoginPage;
      } else {
        this.rootPage = RegisterPage;
      }

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
    })
   });
  }
  openDatabase() {
    this.nav.push(DatabasePage);
  }
  openAbout() {
    this.nav.push(AboutPage);
  }
  openPage(item : MenuOption) {
    this.nav.setRoot(item.component);
  }
  isActive(pages: MenuOption) {
    if (this.nav.getActive() && this.nav.getActive().name === pages.name) {
      return 'primary';
    }
    return 'danger';
  }
  
}
