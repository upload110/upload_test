let express = require('express')
let app = express()
let { searchsql } = require('./sql')
// 查询单个
// SELECT * FROM student_message WHERE id = 1
// SELECT 选择 * 表示所有  FROM学生信息 表名
// let sqlstr = 'SELECT * FROM student_message' //查询所有学生信息
// let addsql = 'INSERT into student_message(id,name,sex) VALUES(1,"小样","男")'

let sqlstr = 'SELECT * FROM student_message WHERE id = 1' //查询 id为1的学生
app.get('/', async function (req, res) {
  let result = await searchsql(addsql)
  console.log(result)
  res.json(result)


})
app.listen(3001)
