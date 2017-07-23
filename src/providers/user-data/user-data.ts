import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events} from 'ionic-angular';
/*
  Generated class for the UserDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserDataProvider {
  HAS_REGISTER = 'hasRegister';

  constructor(
    public events: Events,
    public storage: Storage) {
    //console.log('Hello UserDataProvider Provider');
  }

  register(password: string): void {
    this.storage.set(this.HAS_REGISTER, true);
    this.setPassword(password);
    this.events.publish('register: sucesss')
  }
  setPassword(password: string): void {
    this.storage.set('password', password);
  }
  getPassword(): Promise<string> {
    return this.storage.get('password').then((value)=>{
      return value;
    });
  }
  checkHasRegister(): Promise<string> {
    return this.storage.get(this.HAS_REGISTER).then((value) => {
      return value;
    });
  }
  //
  
}
