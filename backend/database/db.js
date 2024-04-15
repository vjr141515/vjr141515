// db.js
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'daramg9505!',
    database: 'sonamu'
});

conn.connect((err) => {
    if (err) console.log('에러남요',err);
    else console.log('디비 접속 성공!!');
});

module.exports = conn;