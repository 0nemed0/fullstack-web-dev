// function greet(a) {
//   return "Hello " + a;
// }

// let a = "Haniff";
// console.log(greet(a));

// const b = (Hamid) => {
//   return greet(Hamid);
// };

// console.log(b);

function greet(a) {
  return "Hello " + a;
}

let a = "Haniff";
console.log(greet(a)); // Output: Hello Haniff

const b = (Hamid) => {
  return greet(Hamid);
};

// --- CORRECTION HERE ---
// You must call the function b() with a name
console.log(b("Hamid"));
// The argument "Hamid" is passed to 'b', which passes it to 'greet'.
