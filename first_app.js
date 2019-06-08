const fs = require("fs");
 
fs.writeFile("text.txt", "Hello user!", function(error){
 
    if(error) throw error; 
    console.log("Асинхронная запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("text.txt", "utf8");
    console.log(data);  
});


 
fs.appendFile("text.txt", "It's app on NodeJS ", function(error){
    if(error) throw error; // если возникла ошибка
                 
    console.log("Запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("text.txt", "utf8");
    console.log(data);  // выводим считанные данные
});

fs.readFile("text.txt", "utf8", 
            function(error,data){
                console.log("Асинхронное чтение файла");
                if(error) throw error; 
                console.log(data);  
 });

//fs.unlinkSync("text.txt");

fs.unlink("text.txt", (err) => {
  if (err) console.log(err); // если возникла ошибка    
  else console.log("text.txt was deleted");
});