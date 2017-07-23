import { Component } from '@angular/core';

import { App, ViewController, NavController } from 'ionic-angular';

import { AppearencePage } from '../appearence/appearence';
import { AboutPage } from '../about/about';
import { DatabasePage } from '../database/database';
import { SecurityPage } from '../security/security';

@Component({
    template: `
        <ion-list>
            <button ion-item (click)="viewAppear()">Appearence</button>
            <button ion-item (click)="viewData()">Database</button>
            <button ion-item (click)="viewSecurity()">Security</button>
            <button ion-item (click)="viewAbout()">About</button>
        </ion-list>
    `
})

export class PopoverPage {
    constructor
        (
        public appCtrl: App,
        public viewCtrl: ViewController,
        public navCtrl: NavController,
    ) {

    }
    viewAbout() {
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push(AboutPage);
    }
    viewSecurity() {
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push(SecurityPage);
    }
    viewData() {
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push(DatabasePage);
    }
    viewAppear() {
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().push(AppearencePage);
    }

}