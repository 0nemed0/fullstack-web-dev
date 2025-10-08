let x = "7"

console.log(x > 5) // return true even different data type
console.log(x == 5) // return false (==)
console.log(x === 5) // return false after check value and data type (===)


////////////////////////////////

// OPERATORS

// COMPARISON OPERATORS
// >, <, >=, <=

if(x > 5){
    console.log("X is larger than 5");
}else{
    console.log("X is not larger than 5");
}



if(x > 700){
    console.log("X is larger than 700");
}else if(x > 400){
    console.log("X is smaller than 700 but larger than 400");
}else{
    console.log("X is smaller than 400")
}


// LOGIC GATES

// && AND gate
// || OR gate
// ! NOT

age = 10;
weight = 70;

if(age < 15 && weight > 50){
    console.log("Overweight for this age")
}else{
    console.log("Not overweight")
}


let money = false
let vip = false

if(money || vip){
    console.log("Allowed entry")
}else{
    console.log("Denied entry")
}    


let y = 8

if(!(y != 5)){
    console.log("Y is NOT equals to 5")
}else{
    console.log("Y is equals to 5")
}


