// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// let promise = fetch("https://jsonplaceholder.typicode.com/users/1").then(
//   (response) => response.json()
// ); // parse JSON from response;
// promise
//   .then((response) => response.json())
//   .then((response) => {
//     console.log("Response received:", response);
//   });
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// let promise = fetch("https://jsonplaceholder.typicode.com/users/1"); // parse JSON from response;

// // fetch("https://jsonplaceholder.typicode.com/posts/1")
// //    .then(response => response.json()) // parse JSON from response
// //    .then(data => {
// //      console.log(data);
// //    });

// promise
//   .then((response) => response.json())
//   .then((response) => {
//     console.log("Response received:", response);
//   });
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((users) => {
//     users.forEach((user) => {
//       console.log(`${user.name} (${user.email})`);
//     });
//   });
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// let promise = fetch("https://jsonplaceholder.typicode.com/users");

// promise
//   .then((response) => response.json())
//   .then((users) => {
//     users.forEach((user) => {
//       console.log(`${user.name} (${user.email})`);
//     });
//   });
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// console.log("Before fetch");

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => res.json())
//   .then((data) => console.log("Fetched:", data));

// console.log("After fetch");
//////////////////////////////////////////////////
//////////////////////////////////////////////////

let promise = fetch("https://jsonplaceholder.typicode.com/posts/1");

promise
  .then((response) => response.json())
  .then((data) => {
    console.log(`${data.title} + (${data.body}) + (${data.id})`);
  });
