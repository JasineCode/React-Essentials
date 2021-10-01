import showStudentInfo from "./libs/show-student"
import { Student } from "./models/student"

//instanciation of two object ( students )
let student1 = new Student(
                            "saytama",
                            "yagami",
                            "saytama.png",
                            20
                        )
//display full name of student1
student1.getFullName()
//call the helper function within the libs folder
showStudentInfo(student1)