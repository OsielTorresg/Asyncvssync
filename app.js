//Sync Example

// console.log("Starting the program"); // Starting the program

// function sleep(milliseconds) {
//   // We are creating a function that will execute our time
//   let startTime = new Date().getTime();
//   console.log("Program is running");

//   while (new Date().getTime() < startTime + milliseconds) {
//     console.log("In progress");
//   }
//   console.log("Program is Done. ");
// }

// sleep(1000); // Calling our function to perform

// console.log("Do something else.... ");

// ASYNC EXAMPLE

console.log("starting program");

function sleep(milliseconds) {
  console.log("program is running");
  setTimeout(() => {
    console.log("Program is done");
  }, milliseconds);
}

sleep(1000);
console.log("Do something else");
