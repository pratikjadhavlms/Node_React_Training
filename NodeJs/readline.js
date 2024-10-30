var readline = require('readline');
var util = require('util');

var rl = readline.createInterface(process.stdin, process.stdout);

rl.question('What is your name? ', (name)=>{

    rl.setPrompt(`${name} how old are you? `);
    rl.prompt();

    rl.on('line', (age)=>{
        if( age < 18){
            util.log(`${name} beacause you are ${age} years old, you cannot proceed.`);
            rl.close();
        }
        else{
            util.log(`${name} beacause you are ${age} years old, you can proceed.`);
            rl.close();
        }
    })
})