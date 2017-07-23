import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
// import { Object } from '../../pages/object/object';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(public storage: Storage) {
    //console.log('Hello DatabaseProvider Provider');
  }

  getData() {
    return this.storage.get('data');
  }
  save(data) {
    this.storage.set('data', data);
  }
  clear() {
    this.storage.clear();
  }
}
