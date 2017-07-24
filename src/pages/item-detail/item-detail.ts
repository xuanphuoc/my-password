import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, PopoverController, ViewController, ModalController, AlertController } from 'ionic-angular';

import { ItemPopoverPage } from '../popover/item-popover';
import { AddFormPage } from '../add-form/add-form';
import { DatabaseProvider} from '../../providers/database/database';

import { Item } from '../item/item';


@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  public item : Item;
  data = [] ;
  constructor(
    public alertCtrl: AlertController,
    public database: DatabaseProvider,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public popoverCtrl: PopoverController,
    public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.loadData();
    this.loadDatabase();
  }
  loadDatabase() {
    this.data = this.navParams.get('items_filter');
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad ItemDetailPage');
    //this.loadData();
  }
  loadData() {
    this.item = this.navParams.get('item');
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: "Copied to clipboard",
      duration: 1000
    });
    toast.present();
  }
  popoverPresent() {
    let popover = this.popoverCtrl.create(ItemPopoverPage,{item : this.navParams.get('item')});
    popover.present({ ev: event });
    popover.onDidDismiss((item)=>{
      if(item){
        if(item=='copy'){
         let newItem =  this.item.copy();
         this.data.push(newItem);
         this.database.save(this.data);
         this.viewCtrl.dismiss();
         this.notify();
        }else if(item=='delete'){
          this.deleteItem();
        }
        else{
         this.saveItem(item);
        }
      }
      
    });
  }
  saveItem(item) {
    this.item = item;
    this.data[this.navParams.get('index')] = item;
    this.database.save(this.data);
  }
  deleteItem() {
    this.presentConfirm();
  }
  notify() {
    let toast = this.toastCtrl.create({
      message: "Saved data...",
      duration: 1000
    })
    toast.present();
  }
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm ',
      message: 'Do you want to delete this?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
           // console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
           // console.log('Delete clicked');
            this.delete();
          }
        }
      ]
    });
    alert.present();
  }
  delete() {
    this.data.splice(this.navParams.get('index'), 1);
    this.database.save(this.data);
    this.viewCtrl.dismiss();
    this.notify();
  }
}
