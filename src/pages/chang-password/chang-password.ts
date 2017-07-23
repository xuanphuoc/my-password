import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { NgForm } from "@angular/forms";

import { LoginPage } from '../login/login';
import { UserDataProvider } from '../../providers/user-data/user-data';

/**
 * Generated class for the ChangPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-chang-password',
  templateUrl: 'chang-password.html',
})
export class ChangPasswordPage {
  @ViewChild('input') myInput;
  @ViewChild('valid') valid;
  @ViewChild('oldpass') oldpass;

  password;
  submitted = false;
  check_oldpass = false;
  constructor(
    public data: UserDataProvider,
    public toastCtrl: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangPasswordPage');
    this.data.getPassword().then((value) => {
      this.password = value;
    });
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
  check(form: NgForm) {
    if (this.password == this.oldpass.value) {
      this.checkSame(form);
    } else {
      this.check_oldpass = true;
    }
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Password invalid',
      duration: 3000
    });
    toast.present();
  }
  register() {
    this.data.register(this.myInput.value);
    let toast = this.toastCtrl.create({
      message: 'Change pass sucess!',
      duration: 3000
    });
    toast.present();
    this.navCtrl.setRoot(LoginPage);
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
