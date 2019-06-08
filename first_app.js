const http = require("http");
 
http.createServer(function(request, response){
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Hello Node.js</title>");
    response.write("<meta charset=\"utf-8\" />");
    response.write("</head>");
    response.write("<body>");
    if(request.url === "/home" || request.url === "/"){
        response.write("<h2>Home</h2>");
        response.write("<h2>Hello User</h2>")
    }
    else if(request.url == "/about"){
        response.write("<h2>About</h2>");
    }
    else if(request.url == "/contact"){
        response.write("<h2>Contacts</h2>");
    }
    else{
        response.write("<h2>Not found</h2>");
    }
    response.write("</write>");
    response.write("</html>");

    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);
    response.end();
}).listen(3000);



