import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { Account } from "../../providers/database/account";
import { PersonalOptionPage } from "../personal-option/personal-option";
import { SocialOptionPage } from "../social-option/social-option";
import { WorkOptionPage } from "../work-option/work-option";
import { ItemDetailPage } from "../item-detail/item-detail";

import { DatabaseProvider } from "../../providers/database/database";
import { SearchPage } from "../search/search";

/**
 * Generated class for the SocialListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-social-list',
  templateUrl: 'social-list.html',
})
export class SocialListPage {
  public face_data = [];
  public google_data = [];
  public twitter_data = [];
  public skype_data = [];
  public zalo_data = [];
  public zing_data = [];
  public another_data = [];
  constructor(
    public modalCtrl: ModalController,
    public database: DatabaseProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }
  search(){
    this.navCtrl.push(SearchPage);
  }
  ionViewDidEnter() {
    this.loadDatabase();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialListPage');
  }
  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, { item: item, view: true});
  }
  loadDatabase() {
    this.database.getFaceData().then((data) => {
      if (data) {
        if (data.length > 0) {
          document.getElementById('face').style.display = 'block';
        } else {
          document.getElementById('face').style.display = 'none';
        }
        this.face_data = [];

        data.forEach((item) => {
          let newItem = new Account();
          newItem.parseToAccount(item);
          this.face_data.push(newItem);
        });
      }

    });

    this.database.getGoogleData().then((data) => {
      if (data) {
        if (data.length > 0) {
          document.getElementById('google').style.display = 'block';
        } else {
          document.getElementById('google').style.display = 'none';
        }

        this.google_data = [];

        data.forEach((item) => {
          let newItem = new Account();
          newItem.parseToAccount(item);
          this.google_data.push(newItem);
        });
      }

    });

    this.database.getTwitterData().then((data) => {
      if (data) {
        if (data.length > 0) {
          document.getElementById('twitter').style.display = 'block';
        } else {
          document.getElementById('twitter').style.display = 'none';
        }

        this.twitter_data = [];

        data.forEach((item) => {
          let newItem = new Account();
          newItem.parseToAccount(item);
          this.twitter_data.push(newItem);
        });
      }

    });

    this.database.getSkypeData().then((data) => {
      if (data) {
        if (data.length > 0) {
          document.getElementById('skype').style.display = 'block';
        } else {
          document.getElementById('skype').style.display = 'none';
        }

        this.skype_data = [];

        data.forEach((item) => {
          let newItem = new Account();
          newItem.parseToAccount(item);
          this.skype_data.push(newItem);
        });
      }

    });

    this.database.getZaloData().then((data) => {
      if (data) {
        if (data.length > 0) {
          document.getElementById('zalo').style.display = 'block';
        } else {
          document.getElementById('zalo').style.display = 'none';
        }

        this.zalo_data = [];
        data.forEach((item) => {
          let newItem = new Account();
          newItem.parseToAccount(item);
          this.zalo_data.push(newItem);
        });
      }

    });

    this.database.getZingData().then((data) => {
      if (data) {
        if (data.length > 0) {
          document.getElementById('zing').style.display = 'block';
        } else {
          document.getElementById('zing').style.display = 'none';
        }

        this.zing_data = [];
        data.forEach((item) => {
          let newItem = new Account();
          newItem.parseToAccount(item);
          this.zing_data.push(newItem);
        });
      }

    });

    this.database.getAnotherData().then((data) => {
      if (data) {
        if (data.length > 0) {
          document.getElementById('another').style.display = 'block';
        } else {
          document.getElementById('another').style.display = 'none';
        }

        this.another_data = [];
        data.forEach((item) => {
          let newItem = new Account();
          newItem.parseToAccount(item);
          this.another_data.push(newItem);
        });
      }

    });
  }
  openPersonOption() {
    this.navCtrl.push(PersonalOptionPage);
  }
  openSocialOption() {
    this.navCtrl.push(SocialOptionPage);
  }
  openWorkOption() {
    this.navCtrl.push(WorkOptionPage);
  }
}
