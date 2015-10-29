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