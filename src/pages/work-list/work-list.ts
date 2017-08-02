import { Component } from '@angular/core';
import { App, NavController, NavParams, PopoverController, ModalController, ViewController } from 'ionic-angular';

import { AddFormPage } from '../add-form/add-form';
// import { ItemDetailPage } from '../item-detail/item-detail';



import { PersonalOptionPage } from '../personal-option/personal-option';
import { SocialOptionPage } from '../social-option/social-option';
import { WorkOptionPage } from "../work-option/work-option";
import { Account } from "../../providers/database/account";
import { ItemDetailPage } from "../item-detail/item-detail";

import { DatabaseProvider } from "../../providers/database/database";
import { SearchPage } from "../search/search";



/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-work-list',
  templateUrl: 'work-list.html',
})
export class WorkListPage {
  public school_data = [];
  public company_data = [];
  public another_data = [];

  public items_filter = [];
  // public check;
  constructor(
    public database: DatabaseProvider,
    public viewCtrl: ViewController,
    public appCtrl: App,
    public modalCtrl: ModalController,
    public navCtrl: NavController, public navParams: NavParams) {
    // this.loadDatabase();
  }
  search() {
    this.navCtrl.push(SearchPage);
  }
  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, { item: item, view: true });
  }
  loadDatabase() {
    this.database.getSchoolData().then((data) => {
      if (data) {
        if (data.length > 0) {
          document.getElementById('school').style.display = 'block';
        } else {
          document.getElementById('school').style.display = 'none';
        }

        this.school_data = [];

        data.forEach((item) => {
          let newItem = new Account();
          newItem.parseToAccount(item);
          this.school_data.push(newItem);
        });
      }
    });

    this.database.getCompanyData().then((data) => {
      if (data) {
        if (data.length > 0) {
          document.getElementById('company').style.display = 'block';
        } else {
          document.getElementById('company').style.display = 'none';
        }

        this.company_data = [];

        data.forEach((item) => {
          let newItem = new Account();
          newItem.parseToAccount(item);
          this.company_data.push(newItem);
        });
        this.items_filter.push(data);
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
        // this.items_filter.push(data);
      }
    });
  }
  ionViewDidLoad() {
    console.log(' View PersonPage');
  }
  // refresh() {
  //   this.userData.getDate().then((value) => {
  //     if (value) {
  //       this.check = true;
  //     } else {
  //       this.check = false;
  //     }
  //   })
  //   this.database.getData().then((data) => {
  //     if (data) {
  //       this.items = [];

  //       data.forEach((item) => {
  //         newdata.parseFromLocalData(item);

  //         this.items.push(newdata);
  //       });
  //       if (this.check) {
  //         this.sortByDate();
  //       } else {
  //         this.sortAphabeta();
  //       }
  //       this.items_filter = this.items;

  //       //console.log('load data sucess');
  //     }
  //   });
  // }
  // sortAphabeta() {
  //   this.items.sort((a, b) => {
  //     var x = a.avatar;
  //     var y = b.avatar;
  //     if (x < y) { return -1; }
  //     if (x > y) { return 1; }
  //     return 0;
  //   });
  // }
  // sortByDate() {
  //   this.items.sort((a, b) => {
  //     var x = a.date;
  //     var y = b.date;
  //     if (x < y) { return -1; }
  //     if (x > y) { return 1; }
  //     return 0;
  //   })
  // }
  addItem() {
    // this.navCtrl.pu;
  }

  // viewItem(i) {
  //   this.navCtrl.push(ItemDetailPage, { item: this.items[i],items_filter :this.items_filter, index : i});
  // }
  ionViewWillLeave() {
    // console.log('home leaving');
  }
  ionViewDidEnter() {
    this.loadDatabase();
    //console.log('im lived');
    // this.refresh();
    // this.initializeItems();
  }
  // initializeItems() {
  //   this.items_filter = this.items;
  // }
  // getItems(ev: any) {
  //   this.initializeItems();
  //   var val = ev.target.value;
  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.items_filter = this.items_filter.filter((item) => {
  //       return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }

  // }
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
