const express = require("express");
 
const app = express();
app.get("/", function(request, response){
     
    response.send("<h1>Main page</h1>");
});
app.get("/about", function(request, response){
     
    response.send("<h1>About</h1>");
});
app.get("/contact", function(request, response){
     
    response.send("<h1>Contacts</h1>");
});
app.listen(3000);
