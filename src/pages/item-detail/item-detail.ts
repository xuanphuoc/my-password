import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController, PopoverController, ViewController, ModalController, AlertController } from 'ionic-angular';

import { ItemPopoverPage } from '../popover/item-popover';
import { AddFormPage } from '../add-form/add-form';
import { DatabaseProvider } from '../../providers/database/database';

import { SocialSharing } from '@ionic-native/social-sharing';

// import { Item } from '../item/item';


@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  public item;
  public view: boolean;

  @ViewChild('password') myPassword;
  public _important: boolean;
  public _favorite: boolean;
  public header;
  public name;
  public id;
  public title;
  public username;
  public _password;
  public website;
  public note;
  public date;
  constructor(
    public socialCtrl: SocialSharing,
    public alertCtrl: AlertController,
    public database: DatabaseProvider,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public popoverCtrl: PopoverController,
    public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  share() {
    var options = {
      message: 'Username: ' + this.item._user_name + '; Password: ' +  this.item._password, 
      subject: this.item._type.toUpperCase() + '-ACCOUNT',
      files: null, // an array of filenames either locally or remotely
      url: null,
      chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
    }
    this.socialCtrl.shareWithOptions(options).then(() => {
      console.log("Share completed? ");
    }).catch(() => {
      console.log("share fail")
    });
  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Remove',
      message: 'Are you sure? ',
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.remove();
          }
        }
      ]
    });
    alert.present();
  }
  remove() {
    if (this.navParams.get('name') == 'favorite') {
      this.database.removeFavorite(this.item);
    } else {
      this.database.removeImportant(this.item);
    }
    this.navCtrl.pop();
  }
  popoverPresent() {
    let popover = this.popoverCtrl.create(ItemPopoverPage, {
      item: this.item,
    });
    popover.present();
    popover.onDidDismiss((item) => {
      if (item == 'back') {
        this.navCtrl.pop();
      }
    });
  }
  clickEdit() {
    let modal = this.modalCtrl.create(AddFormPage, { item: this.item });
    modal.onDidDismiss((item) => {
      if (item) {
        this.item = item;
        this.loadData();
        this.database.updateItem(this.navParams.get('item'), item);
        console.log('save data');
      }
    });
    modal.present();
  }
  ionViewDidLoad() {
    this.item = this.navParams.get('item');
    document.getElementById('eyes-off').style.display = 'none';
    this.loadData();
    this.view = this.navParams.get('view');
  }

  turnEye() {
    document.getElementById('eyes-off').style.display = 'none';
    document.getElementById('eyes').style.display = 'block';
    this.myPassword.type = 'password';
    this.myPassword.setFocus();
  }
  turnEyeOff() {
    document.getElementById('eyes').style.display = 'none';
    document.getElementById('eyes-off').style.display = 'block';
    this.myPassword.type = 'text';
    this.myPassword.setFocus();
  }
  loadData() {
    let item = this.item;

    this.header = item._type.toUpperCase();
    if (item._type == 'bank') {
      this.name = item._title;
      this.id = item._user_name;
      document.getElementById('title').style.display = 'none';
      document.getElementById('username').style.display = 'none';
    } else {
      this.title = item._title;
      this.username = item._user_name;

      document.getElementById('name').style.display = 'none';
      document.getElementById('id').style.display = 'none';
    }

    if (item._website) {
      this.website = item._website;
    } else {
      document.getElementById('website').style.display = 'none';
    }
    if (item._note) {
      this.note = item._note;
    } else {
      document.getElementById('note').style.display = 'none';
    }
    this.date = item._dateCreate;
    this._password = item._password;
    this._favorite = item._favorite;
    this._important = item._important;
  }
  clickHeart() {
    if (this._favorite) {
      this._favorite = false;
      this.item._favorite = false;
      this.database.removeFavorite(this.item);
    } else {
      this._favorite = true;
      this.item._favorite = true;
      this.database.addFavorite(this.item);
    }
  }
  clickBookmark() {
    if (this._important) {
      this._important = false;
      this.item._important = false;
      this.database.removeImportant(this.item);
    } else {
      this._important = true;
      this.item._important = true;
      this.database.addImportant(this.item);
    }
  }
}
