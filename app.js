const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
 
mongoClient.connect(function(err, client){
      
    const db = client.db("usersdb");
    const collection = db.collection("users");
 
    if(err) return console.log(err);
      
    collection.find({name: "Tom", age:23}).toArray(function(err, results){
                 
        console.log(results);
        client.close();
    });
});


// const MongoClient = require("mongodb").MongoClient;
   
// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url, { useNewUrlParser: true });
 
// let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];
 
// mongoClient.connect(function(err, client){
      
//     const db = client.db("usersdb");
//     const collection = db.collection("users");
     
//     collection.insertMany(users, function(err, results){
              
//         console.log(results);
//         client.close();
//     });
// });