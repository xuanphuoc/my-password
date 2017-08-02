

import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { Account } from "../../providers/database/account";

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
  public name: string;
  public _title: string;
  check_title = true;
  check_user = true;
  check_password = true;
  @ViewChild('bankName') myBankName;
  @ViewChild('id') myId;


  @ViewChild('title') myTitle;
  @ViewChild('user') myUser;
  @ViewChild('password') myPassword;
  @ViewChild('web') myWebsite;
  @ViewChild('note') myNote;

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    // this.loadData();
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Save account successfull!',
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }
  ionViewDidLoad() {
    document.getElementById('eye-off').style.display = 'none';
    console.log('view add form page')
    this.loadData();
    if (this.navParams.get('item')) {
      this.name = this.navParams.get('item')._type;
    } else {
      this.name = this.navParams.get('name');
    }
    this._title = this.name.toUpperCase();
  }
  loadData() {
    let item = this.navParams.get('item');
    if (item) {
      if (item._title) {
        if (item._type == 'bank') {
          this.myBankName.value = item._title;
        } else {
          this.myTitle.value = item._title;
        }
      }
      if (item._user_name) {
        if (item._type == 'bank') {
          this.myId.value = item._user_name;
        } else {
          this.myUser.value = item._user_name;
        }
      }

      this.myPassword.value = item._password;

      if (item._website) {
        this.myWebsite.value = item._website;
      }
      if (item._note) {
        this.myNote.value = item._note;
      }
    }

  }
  turnEye() {
    document.getElementById('eye-off').style.display = 'none';
    document.getElementById('eye').style.display = 'block';
    this.myPassword.type = 'password';
    this.myPassword.setFocus();
  }
  turnEyeOff() {
    document.getElementById('eye').style.display = 'none';
    document.getElementById('eye-off').style.display = 'block';
    this.myPassword.type = 'text';
    this.myPassword.setFocus();

  }
  saveClick() {
    let item = new Account();
    if (this.name == 'bank') {
      //
      if (this.myBankName.value) {
        item.setTitle(this.myBankName.value);
        this.check_title = true;
      } else {
        this.check_title = false;
      }
      //
      if (this.myId.value) {
        item.setUserName(this.myId.value);
        this.check_user = true;
      } else {
        this.check_user = false;
      }
      //
    } else {
      if (this.myTitle.value) {
        item.setTitle(this.myTitle.value);
        this.check_title = true;
      } else {
        this.check_title = false;
      }
      //
      if (this.myUser.value) {
        item.setUserName(this.myUser.value);
        this.check_user = true;

      } else {
        this.check_user = false;
      }
      //
    }
    //
    if (this.myPassword.value) {
      item.setPassword(this.myPassword.value);
      this.check_password = true;

    } else {
      this.check_password = false;
    }
    //
    if (this.myWebsite.value) item.setWebsite(this.myWebsite.value);
    if (this.myNote.value) item.setNote(this.myNote.value);
    item.setDateCreate(new Date().toLocaleString());
    //
    item._type = this.name;
    if (this.navParams.get('item')) {
      item._favorite = this.navParams.get('item')._favorite;
    } else {
      item._favorite = false;
    }
    //
    if (this.navParams.get('item')) {
      item._important = this.navParams.get('item')._important;
    } else {
      item._important = false;
    }
    //
    if (this.check_title && this.check_user && this.check_password) {
      this.viewCtrl.dismiss(item);
      this.presentToast();
    }



  }
  cancelClick() {
    this.viewCtrl.dismiss();
  }

}
