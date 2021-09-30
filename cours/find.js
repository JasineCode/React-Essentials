//Student list array of objects literal 
const STUDENT_LIST = [
    { firstname: "fn 1", lastname: "ln 1", mark: 12 },
    { firstname: "fn 2", lastname: "ln 2", mark: 9 },
    { firstname: "fn 3", lastname: "ln 3", mark: 8 },
    { firstname: "fn 4", lastname: "ln 4", mark: 10 },
]

// JavaScript
function findStudent_JS(fn) {
    for (let i = 0; i < STUDENT_LIST.length; i++) {
        let student = STUDENT_LIST[i]
        if (student.firstname == fn) return student
    }
}
// ES6
const findStudent_ES6 = fn => STUDENT_LIST.find(s => s.firstname == fn)
