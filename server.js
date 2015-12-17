var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : '52.34.150.89',
  user     : 'root',
  password : 'nageshdb',
  database : 'test'
});

var app = express();

app.get('/', function (req, res) {
    
    connection.connect();

    connection.query('SELECT * from gumball', function(err, rows, fields) {
      if (!err)
        // console.log('The solution is: ', rows);
        res.send("Hello AWS MySQL!<br/>The Count of gumballs is: "+rows[0].count_gumballs+"<br/>The Gumball Machine Model is:  "+rows[0].modelNumber+"</br>The Gumball Machine Serial # is: "+ rows[0].serialNumber);
        else
        console.log('Error while performing Query.');
    
    });
    
      //res.send('Hello World!');
});

app.listen( process.env.PORT );
