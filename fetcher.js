const request = require('request');
var http = require('http');
var fs = require('fs');

  request('http://example.edu/', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile('./index.html', body);
});

console.log('Downloaded and saved 3261 bytes to ./index.html');
//console.log(data)
//fs.writeFile('./index.html');

// fs.writeFile('./index.html', 'Hello Node.js', 'utf8', request('http://example.edu/',;


// /** 
//  * SETUP
//  * Our usual client setup code
//  * Connect to example.edu website's HTTP server using our TCP library
//  * HTTP servers typically run on port 80
//  */
// const net = require('net');
// const conn = net.createConnection({ 
//   host: 'example.edu',
//   port: 80
// });
// conn.setEncoding('UTF8');
// conn.on('connect', () => {
//   console.log(`Connected to server!`);

//   conn.write(`GET / HTTP/1.1\r\n`);
//   conn.write(`Host: example.edu\r\n`);
//   conn.write(`\r\n`);
// });

// /** 
//  * HTTP Response
//  * After request is made, the HTTP server should send us HTTP data via our TCP connection
//  * Print the data to the screen, and end the connection
//  */
// conn.on('data', (data) => {
//   console.log(data);
//   conn.end();
// });