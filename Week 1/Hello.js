//Asynchronous Function
fs = require('fs');

fs.readdir('C:/', function(err, data){
    console.log(data);
});

console.log("This comes after the data");

//Synchronous Function
fs = require('fs');

data = fs.readdirSync('C:/');
console.log(data);
console.log("This comes after data");