//Student list array of objects literal 
const STUDENT_LIST = [
    { firstname: "fn 1", lastname: "ln 1", mark: 12 },
    { firstname: "fn 2", lastname: "ln 2", mark: 9 },
    { firstname: "fn 3", lastname: "ln 3", mark: 8 },
    { firstname: "fn 4", lastname: "ln 4", mark: 10 },
]

// JavaScript
function averageMark_JS() {
    let average = 0;
    for (let i = 0; i < STUDENT_LIST.length; i++) {
        average += STUDENT_LIST[i].mark
    }
    return average / STUDENT_LIST.length;
}
// ES6
const averageMark_ES6 =
    _ => STUDENT_LIST
    .map(s => s.mark)
    .reduce(
        (sum ,mark) => sum + mark) / STUDENT_LIST.length
