import { Component } from '@angular/core';
import { ViewController, AlertController, NavController, NavParams } from 'ionic-angular';

import { UserDataProvider } from '../../providers/user-data/user-data';
/**
 * Generated class for the AppearencePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-appearence',
  templateUrl: 'appearence.html',
})
export class AppearencePage {

  testRadioOpen: boolean;
  testRadioResult;
  date;
  ab;
  check: string;
  constructor(
    public viewCtrl: ViewController,
    public userCtrl: UserDataProvider,
    public alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadData();
    console.log('ionViewDidLoad AppearencePage');
  }
  loadData() {
    this.userCtrl.getDate().then((value) => {
      this.date = value;
      if(value){
        this.check = "By date";
      }
    });
    this.userCtrl.getAb().then((value) => {
      this.ab = value;
      if(value){
        this.check = "Aphabetically";
      }
    });
    
  }
  openSort() {
    this.showRadio();
  }
  showRadio() {

    let alert = this.alertCtrl.create();
    alert.setTitle('Sort entries');

    alert.addInput({
      type: 'radio',
      label: 'By date',
      value: 'date',
      checked: this.date,
      handler: () => {
        this.userCtrl.setDate(true);
        this.userCtrl.setAb(false);
        alert.dismiss().then(()=>{
          this.loadData();
        });
        
      }
    });
    alert.addInput({
      type: 'radio',
      label: 'Alphabetically',
      value: 'ab',
      checked: this.ab,
      handler: () => {
        this.userCtrl.setAb(true);
        this.userCtrl.setDate(false);
        alert.dismiss().then(()=>{
          this.loadData();
        });
      }
    });
    alert.addButton('Cancel');
    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

}
