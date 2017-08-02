import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Account } from './account';
// import { Object } from '../../pages/object/object';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class DatabaseProvider {
  myUniqueId : number;
  BANK_ACCOUNT = 'bank';
  MICROSOFT_ACCOUNT = 'microsoft';
  ICLOUD_ACCOUNT = 'icloud';
  COMPUTER_ACCOUNT = 'computer';

  SCHOOL_ACCOUNT = 'school';
  COMPANY_ACCOUNT = 'company';

  FACEBOOK = 'facebook';
  GOOGLE = 'google';
  TWITTER = 'twitter';
  SKYPE = 'skype';
  ZALO = 'zalo';
  ZING = 'zing';

  ANOTHER_ACCOUNT = 'another';
  
  constructor(
    public storage: Storage) {
    //console.log('Hello DatabaseProvider Provider');
    this.getUniqueId().then((value)=>{
      if(value){
        this.myUniqueId = value;
      }else{
        this.myUniqueId = -1;
      }
    });
  }
  
  setUniqueId(value){
    this.storage.set('id',value);
  }
  getUniqueId(){
    return this.storage.get('id');
  }
  //
  removeFavorite(item) {
    this.getData(item._type).then((data) => {
      data.forEach((_item) => {
        if (_item._id == item._id) {
          _item._favorite = false;
          this.saveData(item._type, data);
          return;
        }
      });
    });
  }
  //
  addFavorite(item) {
    this.getData(item._type).then((data) => {
      data.forEach((_item) => {
        if (_item._id == item._id) {
          _item._favorite = true;
          this.saveData(item._type, data);
          return;
        }
      });
    });
  }
  //
  addImportant(item) {
    this.getData(item._type).then((data) => {
      data.forEach((_item) => {
        if (_item._id == item._id) {
          _item._important = true;
          this.saveData(item._type, data);
          return;
        }
      });
    });
  }
  //
  removeImportant(item) {
    this.getData(item._type).then((data) => {
      data.forEach((_item) => {
        if (_item._id == item._id) {
          _item._important = false;
          this.saveData(item._type, data);
          return;
        }
      });
    });
  }
  //
  updateItem(item, newItem) {
    this.getData(item._type).then((data) => {
      for (var index = 0; index < data.length; index++) {
        if (item._id == data[index]._id) {
          data[index] = newItem;
          this.saveData(item._type, data);
          break;
        }
      }
    });
  }
  //
  deleteItem(item) {
    this.getData(item._type).then((data) => {
      for (var index = 0; index < data.length; index++) {
        if (item._id == data[index]._id) {
          data.splice(index, 1);
          this.saveData(item._type, data);
          break;
        }
      }
    });
  }
  //
  addAccount(account) {
    this.myUniqueId ++;
    this.setUniqueId(this.myUniqueId);
    // console.log(this.myUniqueId);
    
    account._id = this.myUniqueId;
    this.getData(account._type).then((data) => {
      if (data) {
        data.push(account);
        this.saveData(account._type, data);
      } else {
        let _data = [];
        _data.push(account);
        this.saveData(account._type, _data);
      }
    });
  }
  //
  saveData(name: string, data) {
    this.storage.set(name, data);
  }
  getData(name: string) {
    return this.storage.get(name);
  }
  //person
  getBankData() {
    return this.storage.get(this.BANK_ACCOUNT);
  }
  getMicrosoftData() {
    return this.storage.get(this.MICROSOFT_ACCOUNT);
  }
  getIcloudData() {
    return this.storage.get(this.ICLOUD_ACCOUNT);
  }
  getComputerData() {
    return this.storage.get(this.COMPUTER_ACCOUNT);
  }
  // work
  getSchoolData() {
    return this.storage.get(this.SCHOOL_ACCOUNT);
  }

  getCompanyData() {
    return this.storage.get(this.COMPANY_ACCOUNT);
  }
  // social
  getFaceData() {
    return this.storage.get(this.FACEBOOK);
  }
  getGoogleData() {
    return this.storage.get(this.GOOGLE);
  }
  getTwitterData() {
    return this.storage.get(this.TWITTER);
  }
  getSkypeData() {
    return this.storage.get(this.SKYPE);
  }
  getZaloData() {
    return this.storage.get(this.ZALO);
  }
  getZingData() {
    return this.storage.get(this.ZING);
  }
  // another
  getAnotherData() {
    return this.storage.get(this.ANOTHER_ACCOUNT);
  }

}
