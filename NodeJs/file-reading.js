const fs = require('fs');

fs.readdir('./', (err, content)=>{
    if(err){
        console.log(err);
    }
    console.log(content);
})

fs.readFile('global.html', 'UTF-8', (err, content)=>{
    console.log(content);
})