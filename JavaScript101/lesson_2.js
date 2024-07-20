/* Lesson 2 - let, var and const variable assignments */

// var variable assignment
var serverName = "api.kodluyoruz.org"
console.log(serverName)

// let empty variable assignment
let serverName;
console.log(serverName)

// let variable assignment
serverName = "https://kodluyoruz.org"
console.log(serverName)

// let variable assignment 
let password = "1234"
console.log(password)

// Trying to use variable before assignment
/* FAULTY USAGE
console.log(username)
let username = "Mr. Beast"
*/

let username = "Mr. Beast"
console.log(username)

// let Changing variable value
username = "Mr. Human"
console.log(username)

// Adding value to variable
username + " Guy" // This does not add the string value to the variable because it is not resigned
console.log(username)

console.log(username + " Guy")

username = username + " Nice"
username += " Guy"
console.log(username)

// const variable assignment
const SERVER_PASSWORD = "admin123" // You cannot assign an empty const variable and it cannot be modified because it is constant!
console.log(SERVER_PASSWORD)

