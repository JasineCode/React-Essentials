//Student list array of objects literal 
const STUDENT_LIST = [
    { firstname: "fn 1", lastname: "ln 1", mark: 12 },
    { firstname: "fn 2", lastname: "ln 2", mark: 9 },
    { firstname: "fn 3", lastname: "ln 3", mark: 8 },
    { firstname: "fn 4", lastname: "ln 4", mark: 10 },
]

// JavaScript
function allStudentsName_JS() {
    let studentsName = [];
    for (let i = 0; i < STUDENT_LIST.length; i++) { 
        studentsName
        .push(
            STUDENT_LIST[i].firstname
            +" "+
            STUDENT_LIST[i].lastname);
    }
    return studentsName;
}
// ES6
const allStudentsName_ES6 = 
    fn => STUDENT_LIST.map (
        s => `${s.firstname} ${s.lastname}`
    )
