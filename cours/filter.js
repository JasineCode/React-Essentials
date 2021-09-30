//Student list array of objects literal 
const STUDENT_LIST = [
    { firstname: "fn 1", lastname: "ln 1", mark: 12 },
    { firstname: "fn 2", lastname: "ln 2", mark: 9 },
    { firstname: "fn 3", lastname: "ln 3", mark: 8 },
    { firstname: "fn 4", lastname: "ln 4", mark: 10 },
]
// JavaScript
function filterStudentsThatPassedExam_JS() {

    let studentsThatPassedExam = [];
    for (let i = 0; i < STUDENT_LIST.length; i++) {
        if (STUDENT_LIST[i].mark >= 10) 
        studentsThatPassedExam.push(STUDENT_LIST[i]);
    }
    return studentsThatPassedExam;
}
// ES6
const filterStudentsThatPassedExam_ES6 = 
    () => STUDENT_LIST.filter( s => s.mark >= 10 );
