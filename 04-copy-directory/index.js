const fs = require('fs');
const path = require('path');
const oldPath = path.join(__dirname, 'files');
const newPath = path.join(__dirname, 'files-copy');

fs.mkdir(newPath, {
  recursive: true
}, err => {
  if (err) throw err;
});
fs.readdir(newPath, (err, files) => {
  for (let i = 0; i < files.length; i++) {
    fs.unlink(newPath + '/' + files[i], err => {
      if (err) throw err;
    });
  }
});
fs.readdir(oldPath, (err, files) => {
  if (err) throw err;
  for (let i = 0; i < files.length; i++) {
    fs.copyFile(oldPath + '/' + files[i], newPath + '/' + files[i], err => {
      if (err) throw err;
    });
  }
});