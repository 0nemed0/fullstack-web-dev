// A function is a reusable block of code that you can represent with a name.

x = 1

// function addOne(){
//     x += 1
//     return x
// }

// console.log(addOne() + 1)


function addOne(){
    x += 1
}

addOne()
addOne()
addOne()
addOne()

console.log(x)


function addTwo(){
    x += 2
}

addTwo()
addTwo()
console.log(x)


function convertXToPounds(){
    x = x * 2.2
}

convertXToPounds()
console.log(x)


// ARGUMENTS

let myHeight = 167
let friendHeight = 175

function cmToFeet(height){
    return height * 0.0328
}

// console.log(cmToFeet(myHeight))
// console.log(cmToFeet(friendHeight))

myHeightInFeet = cmToFeet(myHeight)
console.log(myHeightInFeet)