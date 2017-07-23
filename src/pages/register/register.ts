import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { UserDataProvider } from '../../providers/user-data/user-data';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('input') myInput;
  @ViewChild('valid') valid;

  submitted = false;
  constructor(
    public toastCtrl: ToastController,
    public data: UserDataProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Password invalid',
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  clickOn() {
    this.myInput.type = 'tel';
    document.getElementById("on").style.display = 'none';
    document.getElementById("off").style.display = 'block';
  }
  clickOff() {
    this.myInput.type = 'password';
    document.getElementById("off").style.display = 'none';
    document.getElementById("on").style.display = 'block';
  }
  register() {
    this.data.register(this.myInput.value);
    this.navCtrl.setRoot(HomePage);
  }
  checkSame(form: NgForm) {
    if (this.myInput.value.length > 5) {
      if (this.myInput.value == this.valid.value) {
        this.register();
      } else {
        this.presentToast();
      }
    } else {
      this.submitted = true;
    }
  }
}
