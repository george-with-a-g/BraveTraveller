var fs = require('fs');
fs.appendFile('helloworld.txt','Hello World!', function (err){
    if (err) throw err;
    console.log('Hello World file created.');
});
