type student = {

    id: number;
    name: string;
}

const student1: student = {
    id: 1,
    name: "Peter Lustig"
}

const student2: student = {
    id: 2,
    name: "Jonas Hamann"
}
const student3: student = {
    id: 3,
    name: "Ilker Yildirim"
}
const student4: student = {
    id: 4,
    name: "Tina Ludwigs"
}


const students = [];

students.push(student1)
students.push(student2)
students.push(student3, student4)

console.log(students)


const indexOfStudentToUpdate = students.findIndex(studentWith => {
    return studentWith.id === student4.id;
});

if (indexOfStudentToUpdate !== -1) {
    students[indexOfStudentToUpdate].name = "Johannes Pfeiffer";
}
console.log(students)

//Erste Lösung ohne automatische ID Fortführung
/**
const addStudent = (id, name) => {
    students.push({id: id, name: name})
}
*/

const addStudent = (name) => {
    students.push({id: students.length + 1, name: name})
}

addStudent("Jan Tulpenstiel")
addStudent("Benjamin Ehrenberg")
addStudent("Hans Wurst")
addStudent("Falco Geiler Typ")
addStudent("Mirko auch geiler Typ")

console.log(students)
