//File System
const fs = require('fs');

fs.writeFileSync('notes.txt', 'This file was created by Node.js!')

 //Challenged: Append a message to notes.txt

 fs.appendFileSync('notes.txt', ' Appended text for the challenge')