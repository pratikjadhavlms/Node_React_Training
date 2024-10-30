const fs = require('fs');

fs.writeFile('./Modules/write.html', '\n Hello world from Node.js \n', 'utf8', (err)=>{
    if(err) return err;

    console.log('File created successfully');
})

fs.appendFile('./Modules/write.html', '\n Extra part appended to this file \n', 'utf8', (err)=>{
    if(err) return err;

    console.log('File created successfully');
})