const fs = require('fs');
const path = require('path');
const stylesPath = path.join(__dirname, 'styles');
const projectPath = path.join(__dirname, 'project-dist');
const output = fs.createWriteStream(path.join(projectPath, 'bundle.css'));
fs.readdir(stylesPath, (err, files) => {
  if (err) throw err;
  console.log('Files:\n' + files);
  for (let i = 0; i < files.length; i++) {
    let extension = path.extname(files[i]).split('.').pop();
    console.log(extension);
    if (extension === 'css') {
      const input = fs.createReadStream(path.join(stylesPath, files[i]));
      input.on('data', data => {
        output.write(data.toString() + '\n');
      });
    }
  }
});