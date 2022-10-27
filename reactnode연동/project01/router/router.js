const express = require("express");
const router = express.Router();

const mysql = require("mysql");
const path = require('path')


let conn = mysql.createConnection({     // conn으로 DB에 값을 입력을 할 수 있음
    host : "127.0.0.1",
    user : "root",
    password : "whtjdrms!q2w",
    port : "3306",
    database : "nodejs_DB"
});

router.post('/joinData', (req, res) => {
    console.log("joinData 라우터")
    console.log(req.body.user)

    let sql = 'insert into member values (?,?,1)';
    conn.query(sql, [req.body.user.id, req.body.user.pw], (err, rows)=>{
        if(rows){
            console.log("성공")
            res.json({
                result : 'success'
            })
        } else {
            console.log('실패')
            res.json({
                result: 'fale'
            })
        }
        res.end()
    })
});

router.get('*', (req, res) => {
    console.log('happy hacking')
    res.sendFile(path.join(__dirname,'..', 'react-project', 'build', 'index.html'));
});

module.exports = router;