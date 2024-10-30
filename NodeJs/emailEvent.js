const emitter = require('./Modules/sendEmail.js');


emitter.on('emailEvent', (message)=>{
    console.log(`Email: ${message}`);
})

emitter.emit('emailEvent', 'Send email to the user!');