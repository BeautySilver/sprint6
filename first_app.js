const http = require("http");//modules
const greeting = require("./greeting");
const greeting1= require("./greeting");
const os = require("os");
const User = require("./user.js");

let userName = os.userInfo().username;
let artem = new User("Artem", 17);

artem.sayHi();
console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));
console.log(userName);
console.log(`Hello ${greeting1.name}`);

const greeting2= require("./greeting");
greeting2.name= "Bob";

console.log(`Hello ${greeting2.name}`); //Hello Bob
console.log(`Hello ${greeting1.name}`); //Hello Bob