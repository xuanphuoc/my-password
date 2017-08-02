export class Account {
    public _id : number;
    public _type: string;
    public _favorite: boolean;
    public _important: boolean;
    public _title: string;
    public _user_name: string;
    public _password: string;
    public _website: string;
    public _note: string;
    public _dateCreate: string;
    constructor() {

     }
    convertToString() : string{
       let str : string = 'User: '+  this._user_name + '\n' +
       'Password: ' + this._password;
       return str;
    }
    copy() : Account {
        let _account = new Account();
        _account._type = this._type;
        _account._favorite = this._favorite;
        _account._important = this._important;
        _account.setTitle(this._title + '(copy)');
        _account.setUserName(this._user_name);
        _account.setPassword(this._password);
        _account.setWebsite(this._website);
        _account.setNote(this._note);
        _account.setDateCreate(new Date().toLocaleString());
        return _account;
    }
    parseToAccount(item) {
        this._id = item._id;
        this._type = item._type;
        this._favorite = item._favorite;
        this._important = item._important;
        this.setTitle(item._title);
        this.setUserName(item._user_name);
        this.setPassword(item._password);
        if (item._website) this.setWebsite(item._website);
        if (item._note) this.setNote(item._note);
        this.setDateCreate(item._dateCreate);
    }
    setTitle(value: string) {
        this._title = value;
    }
    setUserName(value: string) {
        this._user_name = value;
    }
    setPassword(value: string) {
        this._password = value;
    }
    setWebsite(value: string) {
        this._website = value;
    }
    setNote(value: string) {
        this._note = value;
    }
    setDateCreate(value: string) {
        this._dateCreate = value;
    }
}