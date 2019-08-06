export class Usuario {
    constructor() {
        this._username;
        this._fullname;
        this._email;
        this._pw;        
    }

    get user() {
        return this._username;
    }

    get fullname() {
        return this._fullname;
    }

    get email() {
        return this._email;
    }

    get pw() {
        return this._pw;
    }

    set user(user) {
        this._username = user;
    }

    set fullname(name) {
        this._fullname = name;
    }

    set email(emaill) {
        this._email = emaill;
    }

    set pw(password) {
        this._pw = password;
    }
}