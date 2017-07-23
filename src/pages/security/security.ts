import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChangPasswordPage } from '../chang-password/chang-password';


/**
 * Generated class for the SecurityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-security',
  templateUrl: 'security.html',
})
export class SecurityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecurityPage');
  }
  changePassword(){
    this.navCtrl.push(ChangPasswordPage);
  }
} 
