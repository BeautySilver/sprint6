const http = require("http");
 
function display(data, callback){
 
    
    let randInt = Math.random() * (10 - 1) + 1;
    let err = randInt>5? new Error("Ошибка выполнения. randInt больше 5"): null;
     
    setTimeout(function(){
        callback(err, data);
    }, 0);
}
  console.log("Начало работы программы");

displaySync("Обработка данных...",function (err, data){
 
    if(err) throw err;
    console.log(data);
});


let message = "Hello World!";
http.createServer(function(request,response){
     
    console.log(message);
    response.end(message);
     
}).listen(3000, "127.0.0.1",()=>{
    console.log("Сервер начал прослушивание запросов");
});

function displaySync(data){
    console.log(data);
}
  
console.log("Завершение работы программы");