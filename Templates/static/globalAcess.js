const {
    pid: processid, versions: { node: processVersion },
    platform: processPlatform, arch: processArch, title:
    processTitle, argv: processArgv, env: processEnv } = process;

console.log(processid);
console.log(processVersion);
console.log(processPlatform);
console.log(processArch);
console.log(processTitle);
console.log(processArgv);
// console.log(processEnv);


console.log("DJANGO_SECRET_KEY_TWO :" + process.env['DJANGO_SECRET_KEY_TWO']);


// grap flag function
const grab = flag => {
    let index = processArgv.indexOf(flag) + 1;
    return processArgv[index]
}



let greeting = grab("--user");
let username = grab("--greeting")
let bruker1 = `My name is ${greeting} ${username}`
console.log(bruker1);

// node Templates/static/index.js NORZACOAS MWAMUZISCODE.COM
const [, , firstName, lastName] = process.argv

let user = `My name is ${firstName} ${lastName}`
console.log(user);

// node Templates/static/index.js --user NORZACOAS --greeting MWAMUZISCODE.COM
process.stdin.on("data", name => {
    process.stdout.write(`\n \n  ${name.toString().trim()} \n \n `);
    // process.exit();
})

// process.stdout.write("What do you what to do?!\n");
// process.stdin.on("data", username => {
//     process.stdout.write(`Login ${`${username.toString().trim()}!` }`);
//     //process.stdout.write("Hello " + name.toString() + "!\n");
//     process.exit();
// })

