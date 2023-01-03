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
const grap = flag => {
    let index = process.argv(flag);
    return 
}



let greeting = grab("--user");
let username = grab("--greeting")



const [, , firstName, lastName] = process.argv
let user = `My name is ${firstName} ${lastName}`
console.log(user);

process.stdout.write("What's your name?!\n");
process.stdin.on("data", name => {
    process.stdout.write(`Hello ${name.toString().trim()}!`);
    process.exit();
})

// process.stdout.write("What do you what to do?!\n");
// process.stdin.on("data", username => {
//     process.stdout.write(`Login ${`${username.toString().trim()}!` }`);
//     //process.stdout.write("Hello " + name.toString() + "!\n");
//     process.exit();
// })