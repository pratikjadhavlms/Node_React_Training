const fs = require('fs');

fs.access('Views', (err)=>{
    if(err){
        console.log('Directory does not exist');

        fs.mkdir('Views', (err)=>{
            if(err) return err;

            fs.writeFile('./Views/index.html', 'Hello world from Node.js', 'utf8', (err)=>{
                if(err) return err;

                console.log('File created');
            })
        })
    }
})