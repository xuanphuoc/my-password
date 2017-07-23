import{Injectable} from '@angular/core';



@Injectable()

export class Item {
    public avatar: string;
    public title: string;
    public account: string;
    public user: string;
    public password: string;
    public website: string;
    public note: string;
    public date: string;
    constructor() {}
   
    public copy(): Item {
        let newItem = new Item();
        newItem.avatar = this.avatar;
        newItem.title = this.title+'(copy)';
        newItem.account = this.account;
        newItem.user =this.user;
        newItem.password = this.password;
        newItem.website = this.website;
        newItem.note = this.note;
        newItem.date = new Date().toLocaleString();
        return newItem;
    }
    setAvatar(value: string) {
        this.avatar = value;
    }
    getAvatar(): string {
        return this.avatar;
    }
    setTitle(value: string) {
        this.title = value;
    }
    getTitle(): string {
        return this.title;
    }
    setAccount(value: string) {
        this.account = value;
    }
    getAccount(): string {
        return this.account;
    }
    setUser(value: string) {
        this.user = value;
    }
    getUser(): string {
        return this.user;
    }
    setPassword(value: string) {
        this.password = value;
    }
    getPassword(): string {
        return this.password;
    }
    setWebsite(value: string) {
        this.website = value;
    }
    getWebsite(): string {
        return this.website;
    }
    setNote(value: string) {
        this.note = value;
    }
    getNote(): string {
        return this.note;
    }
    setDate(value: string) {
        this.date = value;
    }
    getDate(): string {
        return this.date;
    }
}