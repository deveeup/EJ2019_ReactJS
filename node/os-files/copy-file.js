const fs = require('fs');

fs.copyFile("example.txt", "exampleCopy.txt", err => console.log(err));