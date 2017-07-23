import { Component } from '@angular/core';
import { App, NavController, NavParams, PopoverController, ModalController, ViewController } from 'ionic-angular';

import { AddFormPage } from '../add-form/add-form';
import { PopoverPage } from '../popover/popover';

import { DatabaseProvider } from '../../providers/database/database';
import { ItemDetailPage } from '../item-detail/item-detail';

import { Item } from '../item/item';
/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public items = new Array<Item>();
  public items_filter = [];
  constructor(
    public viewCtrl: ViewController,
    public appCtrl: App,
    public modalCtrl: ModalController,
    public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public database: DatabaseProvider) {
    //this.refresh();
  }
  presentPopover() {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }

  ionViewDidLoad() {
    //this.database.clear();
    //  console.log(' View HomePage');
  }
  refresh() {
    this.database.getData().then((data) => {
      if (data) {
        this.items = [];

        data.forEach((item) => {
          let newdata = new Item();
          newdata.setAvatar(item.avatar);
          newdata.setTitle(item.title);
          newdata.setAccount(item.account);
          newdata.setUser(item.user);
          newdata.setPassword(item.password);
          newdata.setWebsite(item.website);
          newdata.setNote(item.note);
          newdata.setDate(item.date);
          this.items.push(newdata);
        });
        this.items_filter = this.items;
        //console.log('load data sucess');
      }
    });
  }
  addItem() {
    let modal = this.modalCtrl.create(AddFormPage,{item: new Item()});
    modal.onDidDismiss((item) => {
      if (item) {
        this.saveItem(item);
      }
    });
    modal.present();
  }
  saveItem(item) {
    this.items.push(item);
    this.items_filter = this.items;
    this.database.save(this.items);
  }
  viewItem(i) {
    this.navCtrl.push(ItemDetailPage, { item: this.items[i], index: i });
  }
  ionViewWillLeave() {
    // console.log('home leaving');
  }
  ionViewDidEnter() {
    //console.log('im lived');
    this.refresh();
    // this.initializeItems();
  }
  initializeItems() {
    this.items_filter = this.items;
  }
  getItems(ev: any) {
    this.initializeItems();
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items_filter = this.items_filter.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }
}
