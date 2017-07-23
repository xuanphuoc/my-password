import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';

import { UserDataProvider } from '../../providers/user-data/user-data';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})



export class LoginPage {
    @ViewChild('input') myInput;

    constructor(
        public toastCtrl : ToastController,
        public userData: UserDataProvider,
        public navCtrl: NavController,
    ) {
    }

    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'Password invalid',
            duration: 3000
        });
        toast.present();
    }

    ionViewDidLoad() {
       
    }

    changeOff() {
        setTimeout(() => {
            this.myInput.type = 'tel';
            document.getElementById("on").style.display = 'none';
            document.getElementById("off").style.display = 'block';
            this.myInput.setFocus();
        }, 150);
    }
    changeOn() {
        setTimeout(() => {
            this.myInput.type = 'password';
            document.getElementById("off").style.display = 'none';
            document.getElementById("on").style.display = 'block';
            this.myInput.setFocus();
        }, 150);
    }
    login() {
        this.navCtrl.setRoot(HomePage);
    }
    checkPassword() {
        this.userData.getPassword().then((value)=>{
            if(value == this.myInput.value){
                this.login();
            }else{
                this.presentToast();
            }
        });
    }

}

