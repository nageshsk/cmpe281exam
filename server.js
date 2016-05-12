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
        res.send("Hello AWS MySQL!<br/>The Count of gumballs is: "+rows[0].count_gumballs+"<br/>The Gumball Machine Model is:  "+rows[0].model_number+"</br>The Gumball Machine Serial # is: "+ rows[0].serial_number);
        else
        console.log('Error while performing Query.');
    
    });
    
});

app.listen( process.env.PORT );
