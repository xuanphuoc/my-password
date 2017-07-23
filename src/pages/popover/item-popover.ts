import { Component } from '@angular/core';

import { App, ViewController, NavController, NavParams, ModalController } from 'ionic-angular';
import { AddFormPage } from '../add-form/add-form';
@Component({
    template: `
        <ion-list>
            <button ion-item (click)="editItem()">Edit</button>
            <button ion-item (click)="share()">Share</button>
            <button ion-item (click)="copy()">Copy</button>
            <button ion-item (click)="deleteItem()">Delete</button>
        </ion-list>
    `
})
export class ItemPopoverPage {
    constructor
        (
        public modalCtrl: ModalController,
        public appCtrl: App,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public navCtrl: NavController,
    ) {
    }
    
    editItem() {
        let modal = this.modalCtrl.create(AddFormPage, { item: this.navParams.get('item') });
        modal.onDidDismiss((item) => {
            if (item) {
                this.viewCtrl.dismiss(item);
            }
        });
        modal.present();
    }
    copy() {
        this.viewCtrl.dismiss('copy');
    }
    deleteItem() {
        this.viewCtrl.dismiss('delete');
    }
}