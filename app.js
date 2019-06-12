const mysql = require("mysql2");
  
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "pultickbot",
  password: "S233kaas17102001"
}).promise();

 connection.query("SELECT * FROM clients")
         .then(([rows, fields]) =>{
            console.log(rows);
          })
          .catch(err =>{
            console.log(err);
          });

 