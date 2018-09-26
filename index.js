var http = require('http');
var port = 3000;

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  req.pipe(res)
})

server.listen(port, '127.0.0.1');
console.log('server started on port', port);
