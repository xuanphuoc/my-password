import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from "../../providers/database/database";
import { ItemDetailPage } from "../item-detail/item-detail";

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  public _name = ['bank', 'microsoft', 'icloud', 'computer', 'school', 'company', 'facebook', 'google', 'twitter', 'skype', 'zalo', 'zing', 'another'];
  public _data = [];
  public items = [];
  constructor(
    public database: DatabaseProvider,
    public navCtrl: NavController, public navParams: NavParams) {
      this.loadData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  loadData() {
    this._data = [];
    this._name.forEach((name) => {
      this.database.getData(name).then((data) => {
        if (data) {
          data.forEach((item) => {
            this._data.push(item);
          });
        }
      });
    });
    this.items = this._data;
  }
  initializeItems(){
    this.items = this._data;
  }
  viewItem(item){
    this.navCtrl.push(ItemDetailPage, { item: item, view: true});
  }
  getItems(ev) {
    // Reset items back to all of the items
     this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item._title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
