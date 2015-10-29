// var http = require('http');
// var fs = require('fs');
// var data = fs.readFileSync('index.html');

// http.createServer(function (req, res) {

//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(data)
//   res.end();
// }).listen(8030);	
// console.log("Server starting at port 8030................");

//================================
var http = require('http');
var fs = require('fs');

var requestHandler = function(request,response){
	if(request.url == '/')
	request.url = 'index.html';
	var newUrl = './' + request.url;
	fs.readFile(newUrl,function(err,data){
		if(err){
		return "Error occured"
	}	
	response.end(data)
	});
};
var server = http.createServer(requestHandler);
server.listen(8030);
console.log("Server starting at port 8030................");