import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { AddFormPage } from "../add-form/add-form";
import { DatabaseProvider } from "../../providers/database/database";

/**
 * Generated class for the SocialListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-social-option',
  templateUrl: 'social-option.html',
})
export class SocialOptionPage {
  public _data = [];
  constructor(
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public database: DatabaseProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialListPage');
  }
  clickOption(name: string) {
    let modal = this.modalCtrl.create(AddFormPage, { name: name });
    modal.onDidDismiss((item) => {
      if (item) {
       this.database.addAccount(item);
      }
    });
    modal.present();
  }
}
