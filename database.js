const express = require("express");
//const mysql = ("mysql2");
const mysql = require('mysql2');
const app = express();
app.use(express.json());

// Create connection to Mysql database 

const con=mysql.createConnection({
    host: 'localhost',
    database: 'BloodDonation',
    user: 'root', 
    password: 'Letsdoit!'

});

// Connect to Mysql

con.connect((err)=> {
    if (err) {
        //console.error('Error connecting to Mysql: + err.stack');
        console.error('Error connecting to Mysql: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + con.threadId);
});


app.get('/donors/:id', (req, res) =>{
    const donorsId = req.params.id;
    con.query ('select * from Patients WHERE Patient_ID=?', donorsId, (err, rows)=>{
        if (err) {
            console.log(err)
        } else{
                res.send(rows)
            }
        })
    })


//app.listen(3000, (err)=> {
//    console.log('Error starting sever: ' + err)
//    if (err){
//} else{
//onsole.log('Sever started on port 3306')
//}
//})

app.listen(3000, (err) => {
    if (err) {
        console.log('Error starting server: ' + err)
    }else{
        console.log('Server started on port 3000')
    }
});