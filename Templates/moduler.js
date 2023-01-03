const path = require("path");
const util = require("util");
const readline = require("readline");


console.log(__filename);
console.log(path.basename(__filename));
util.log(path.basename(__filename));



console.log('-----------------------------------------------------------');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("What's your name?\n", (answer) => {
    console.log(`Hello ${answer}!`);
    process.exit();
})