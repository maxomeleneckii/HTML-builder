const fs = require('fs');
const path = require('path');
const stream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf8');
const {
  stdout
} = require('process');
stream.on('data', (e) => stdout.write(e));