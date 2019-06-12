const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
 
mongoClient.connect(function(err, client){
     
    if(err) return console.log(err);
      
    const db = client.db("usersdb");
    db.collection("users").deleteMany({name: "Tom", age:23}, function(err, result){
              
        console.log(result);
        client.close();
    });
     db.collection("users").deleteOne({name: "Bob"}, function(err, result){
              
        console.log(result);
        client.close();
    });
      db.collection("users").findOneAndDelete({age: 45}, function(err, result){
              
        console.log(result);
        client.close();
    });
      db.collection("users").drop(function(err, result){
              
        console.log(result);
        client.close();
    });
});