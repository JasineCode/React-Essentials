export class Student {

    constructor(fn, ln, avatar, mark) {
        this._firstname = fn
        this._lastname = ln
        this._avatar = avatar
        this._mark = mark
        this._isPresent = true
    }
    getFullName = 
        () =>  alert(`${this._firstname} , ${this._lastname}`)

}
