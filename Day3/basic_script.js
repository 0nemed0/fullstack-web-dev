var x = 5; // ES4
let y = 10;// ES5+

console.log(x + y);

console.log("1" + "1");

const myName = "Haniff";

// myName = "Haniff Hamid"

console.log("My name is " + myName);

x = 5;

console.log(x + " times " + x + " = " + (x*x))


////////////////////////////////////////
// BASICS JS

// DATA TYPES

// Integer ( 2 billions positive numbers, 2 billions negative numbers)
// Decimals (Double, Float)
// Boolean (0, 1)
// String (Basically words enclosed in "" quotation marks)


let distance = 5.5
let goThere = true

console.log(distance)
console.log(goThere)

console.log(typeof("goThere"))

// NON-PRIMITIVE DATA TYPES
//Objects (represented by curly bracket {} )
//Array (represented by square bracket [] )

// Array
let students = ["Celina","Gina","Anith"]
console.log(students[1])

// Object
let myDetails = {
    name : "Haniff",
    age : "36",
    "city" : "Kuala Lumpur",
    "students" : students
}

console.log(myDetails)
console.log(myDetails.name)
console.log(myDetails["city"])
console.log(myDetails.students[0])


let details = [
    {
    name : "Haniff",
    age : "36",
    "city" : "Kuala Lumpur",
    "students" : students,
},
    {
    name : "Johan",
    age : "22",
    "city" : "Selangor",
    "students" : students,
},
    {
    name : "Kamal",
    age : "44",
    "city" : "Perak",
}

]

console.log(details)
