const mysql =require('mysql')
// const env =require('dotenv')
const connection =mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"root",
    database:"bookstore"
})
connection.connect(function(err) {
    if (err) console.log(err.message) ;
    console.log("Successfully connected");
  });
module.exports=connection;