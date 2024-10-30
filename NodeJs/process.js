// let a = 'Pratik';
// console.log(a);

// console.log(process.argv);

// var b = process.argv.indexOf('--user');
// console.log(b);

process.stdout.write('What is your name? ');

process.stdin.on('data', function(data){
    console.log(data.toString().trim());
    process.exit();
});