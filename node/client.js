


/*const {request} = require("http");
let requestStream = request({
	hostname: "localhost",
	//path: "/20_node.html",
	port: 8000,
	method: "GET",
	headers: {Accept: "text/html"}
}, response => {
	console.log("Server responded with status code",
		response.statusCode);
});
requestStream.end();*/


const {request} = require("http");
request({
	hostname: "localhost",
	port: 8000,
	method: "POST"
}, response => {
	response.on("data", chunk => console.log(chunk));
}).end("hey server");









