class Student {

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
//instanciation of two object ( students )
let student1 = new Student("saytama","yagami","saytama.png",20)
let student2 = new Student("son","goku","goku.png",18)
//display full name of student1
student1.getFullName()