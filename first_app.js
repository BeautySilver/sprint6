const EventEmitter = require("events");
  
let eventName = "greet";
 
class User extends EventEmitter {
    sayHi(data) {
        this.emit(eventName, data);
    }
}
 
let user = new User();
// добавляем к объекту user обработку события "greet"
user.on(eventName, function(data){
    console.log(data);
});
  
user.sayHi("I need only your close...");


// const Emitter = require("events");

// function User(){
// }


// let eventName = "greet";

// util.inherits(User, Emitter);

// User.prototype.sayHi = function(data){
//     this.emit(eventName, data);
// }
// let user = new User();

// user.on(eventName, function(data){
//     console.log(data);
// });
 
// user.sayHi("I need only your close...");
// emitter.on(eventName, function(){
//     console.log("Hello all!");
// });
 
// emitter.on(eventName, function(){
//     console.log("Hello!");
// });
 
// emitter.on(eventName, function(data){
//     console.log(data);
// });

// emitter.emit(eventName, "Hi");