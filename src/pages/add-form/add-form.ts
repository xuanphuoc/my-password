

import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ViewController } from 'ionic-angular';

import { Item } from '../item/item';

/**
 * Generated class for the AddFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-add-form',
  templateUrl: 'add-form.html',
})
export class AddFormPage {
  title;
  account;
  user;
  password;
  website;
  note;
  date;
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    // this.loadData();
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: "Data saved  ",
      duration: 1000
    });
    toast.present();
  }
  ionViewDidLoad() {
    //this.item = this.navParams.get('item');
    this.loadData();
  }

  saveItem() {
    let newdata = new Item();
    newdata.avatar = this.title.charAt(0).toUpperCase();
    newdata.title = this.title;
    newdata.account = this.account;
    newdata.user = this.user;
    newdata.password = this.password;
    newdata.website = this.website;
    newdata.note = this.note;
    newdata.date = new Date().toLocaleString();
    this.viewCtrl.dismiss(newdata);
    this.presentToast();
  }
  close() {
    this.viewCtrl.dismiss();
  }
  loadData() {
    this.title = this.navParams.get('item').title;
    this.account = this.navParams.get('item').account;
    this.user = this.navParams.get('item').user;
    this.password = this.navParams.get('item').password;
    this.website = this.navParams.get('item').website;
    this.note = this.navParams.get('item').note;
  }

}
