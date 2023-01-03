// console.log("Hello world!");
// console.log(process.argv);

// [, , third, fourth] = process.argv
// console.log("Third: " + third + " Fourth: " + fourth);


// process.stdout.write("Welcome to the new world");
process.stdout.write("What's your name?!\n");

process.stdin.on("data", name => {
    process.stdout.write("Hello " + name.toString().trim() + "!");
    process.exit();
})


process.stdin.on("data", name => {
    process.stdout.write("Hello " + name.toString() + "!\n");
    process.exit();
})