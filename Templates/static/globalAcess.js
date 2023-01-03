let processid = process.pid
let processVersion = process.versions.node
let processPlatform = process.platform
let processArch = process.arch
let processTitle = process.title
let processArgv = process.argv
let processEnv = process.env

console.log(processid)
console.log(processVersion)
console.log(processPlatform)
console.log(processArch)
console.log(processTitle)
console.log(processArgv);
console.log(processEnv['IP_ADDRESS']);



const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
}


const [,, firstName, lastName ] = processArgv

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`Your name is ${greeting} ${user}`);