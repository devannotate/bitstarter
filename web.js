var express = require('express');
var app = express();
// Start Addign the code  for reading from the file
var fs = require('fs');
// End Addig the code
app.use(express.logger());


// Start Addign the code  for reading from the file
var readString = fs.readFileSync('index.html');
// End Addig the code
app.get('/', function(request, response) {
 // Commenting the Existing Code
 // response.send('Hello World 2!');
  
// Start Addign the code  for reading from the file
  response.send(readString.toString('utf-8'));
// End Addig the code
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
