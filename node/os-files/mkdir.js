const fs = require('fs');

fs.mkdir('dir1/dir2/dir3', { recursive: true }, (err) => console.log(err));

