import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { ItemDetailPage } from "../item-detail/item-detail";

/**
 * Generated class for the FavoriteListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-favorite-list',
  templateUrl: 'favorite-list.html',
})
export class FavoriteListPage {
  public _name = ['bank','microsoft','icloud','computer','school','company','facebook','google','twitter','skype','zalo','zing','another'];
  public _data = [];
  constructor(
    public database : DatabaseProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidEnter(){
    this.loadData();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoriteListPage');
    // this.loadData();
  }
  viewItem(item){
    this.navCtrl.push(ItemDetailPage,{item: item, view: false,name: 'favorite'});
  }
  loadData(){
    this._data = [];
    this._name.forEach((value)=>{
      this.database.getData(value).then((data)=>{
        if(data){
          data.forEach((item) => {
            if(item._favorite){
              this._data.push(item);
            }
          });
        }
      });
    });
  }
}
