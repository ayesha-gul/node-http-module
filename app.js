// let a = 12;
// let b = 30;
// let sum = a+b;


// console.log("the output is "+ sum);

let http = require('http');
http.createServer(function(req,res) 
{   
    // res.writeHead(200, {'Content-type': 'text/html'})
    res.write("welcome Back Alien !!!");
    res.end();
}).listen(8989);