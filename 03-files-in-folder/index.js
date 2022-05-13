const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), (err, files) => {
  if (err) throw err;
  for (let i = 0; i < files.length; i++) {
    fs.stat(path.join(path.join(__dirname, 'secret-folder'), files[i]), (err, stat) => {
      if (err) throw err;
      if (stat.isFile()) {
        let kb = path.extname(files[i]).split('.').join('');
        let abs = files[i].split('.');
        let nameFile = abs.slice(0, (abs.length - 1)).join('.') + '';
        console.log(nameFile, '-', kb, '-', (stat.size / 1024).toFixed(3) + 'kb');
      }
    });
  }
});