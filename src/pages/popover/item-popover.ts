import { Component } from '@angular/core';

import { App, ViewController, NavController, NavParams, ModalController, AlertController, ToastController } from 'ionic-angular';

import { AddFormPage } from '../add-form/add-form';
import { DatabaseProvider } from "../../providers/database/database";
import { Account } from "../../providers/database/account";
import { UserDataProvider } from "../../providers/user-data/user-data";

@Component({
    template: `
        <ion-list>
            <button ion-item (click)="copy()">Make a Copy</button>
            <button ion-item (click)="presentAlert()">Delete</button>
        </ion-list>
    `
})
export class ItemPopoverPage {
    constructor
        (
        public toastCtrl: ToastController,
        public userCtrl: UserDataProvider,
        public modalCtrl: ModalController,
        public database: DatabaseProvider,
        public alerCtrl: AlertController,
        public appCtrl: App,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public navCtrl: NavController,
    ) {
    }
    ionViewDidEnter() {
        // this.load();
    }
    presentAlert() {
        let alert = this.alerCtrl.create({
            title: 'Delete',
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
                        if (this.navParams.get('item')._important) {
                            this.presentAlert2();
                        } else {
                            this.delete();
                            this.notify();
                            this.viewCtrl.dismiss('back');
                        }
                    }
                }
            ]
        });
        alert.present();
    }
    presentAlert2() {
        let alert = this.alerCtrl.create({
            title: 'Warning!',
            message: 'This is a important account, You need fill master password',
            inputs: [
                {
                    name: 'password',
                    placeholder: 'Master password',
                    type: 'password',
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Ok',
                    handler: data => {
                        this.userCtrl.getPassword().then((value) => {
                            if (data.password == value) {
                                this.delete();
                                this.notify();
                                this.viewCtrl.dismiss('back');
                            } else {
                                this.errorMessage();
                                this.viewCtrl.dismiss();
                                return false;
                            }
                        });

                    }
                }
            ]
        });
        alert.present();
    }
    errorMessage() {
        let toast = this.toastCtrl.create({
            message:'Password invalid!',
            duration: 2000 ,
            position:'top'
        });
        toast.present();
    }
    notify(){
        let toast2 = this.toastCtrl.create({
            message: 'Deleted account!',
            duration: 2000,
            position: 'bottom',
            cssClass:'toast'
        });
        toast2.present();
    }
    ionViewDidLoad() {
        // console.log('load');
        // this.load();
    }
    delete() {
        this.database.deleteItem(this.navParams.get('item'));
    }
    copy() {
        let _account = new Account()
        _account.parseToAccount(this.navParams.get('item'));
        this.database.getData(_account._type).then((data) => {
            data.push(_account.copy());
            this.database.saveData(_account._type, data);
            this.viewCtrl.dismiss('back');
        });
    }

}