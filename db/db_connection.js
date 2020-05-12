let mysql = require('mysql');

let connection = {
host : "localhost",
user : "root",
password : "jain410",
database : "readyassist"
};

let con = mysql.createConnection(connection);
let sql = "select * from employees;"

con.query(sql, function(err, data, fields)
{
if(err) throw err;
console.log('running fine', data);
});

con.end();
