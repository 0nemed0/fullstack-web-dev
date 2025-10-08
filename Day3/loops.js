// Loops basically mean you keep doing something similar/same until a condition tells you to stop.

// for(let i = 0; i < 5; i++){
//     console.log(i)
// }

let x = 0;

// while(x < 6){
//     console.log(x);
//     // x = x + 2
//     x += 2; // shorter code
// }

do{
    console.log(x);
    // x = x + 2
    x += 2; // shorter code
}while(x < 6)



// FOR EACH LOOP

let arrayOfNumbers = [5, 3, 6, 8, 2, 1];

console.log(arrayOfNumbers)

arrayOfNumbers.forEach(function(currentValue, index, array){
    // console.log(currentValue)
    console.log(index)
});