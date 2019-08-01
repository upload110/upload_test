let { sqlconfig } = require('./config/index')

var mysql = require('mysql');//创建数据库
var connection = mysql.createConnection(sqlconfig);//连接数据库

connection.connect(); //链接数据库

module.exports = {
  searchsql: function (sqlstr) {
    return new Promise((resolove, reject) => {
      connection.query(sqlstr, function (error, results, fields) {
        if (error) throw error;
        console.log(results) //数据信息
        // console.log(fields)
        resolove(results);
        connection.end()//关闭数据库
      })
    })

  }
}

