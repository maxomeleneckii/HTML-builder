const fs = require('fs');
const path = require('path');
const {
  stdin,
  stdout,
  exit
} = require('process');
const stream = fs.createWriteStream(path.join(__dirname, 'text.txt'));

stdout.write('Hi!!!Write text please.....\n');
stdin.on('data', (message) => {
  if (message.toString().trim() === 'exit') {
    exitApp();
  } else {
    stream.write(message);
  }
});

function exitApp() {
  stdout.write('Good bye my friend!!!');
  exit();
}
process.on('SIGINT', exitApp);