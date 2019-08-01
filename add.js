var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'admin'
});
connection.connect();
var addSql = 'INSERT INTO student_message(id,name,sex) VALUES(0,?,?)';
var addSqlParams = ['张王', '男'];
//增
connection.query(addSql, addSqlParams, function (err, result) {
  if (err) {
    console.log('[INSERT ERROR] - ', err.message);
    return;
  }
  // console.log('--------------------------INSERT----------------------------');
  console.log('INSERT ID:', result.insertId);
  console.log('INSERT ID:', result);
  //   console.log('-----------------------------------------------------------------\n\n');
});
connection.end();
