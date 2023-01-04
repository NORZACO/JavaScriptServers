const path = require("path");
const util = require("util");
const readline = require("readline");


console.log(path.basename(__filename));
util.log(path.basename(__filename));



console.log('-----------------------------------------------------------');


// create readline interface
const reaLineInterface = readline.createInterface({
  // use stdin as input stream
  input: process.stdin,
  // use stdout as output stream
  output: process.stdout
});

// create empty object to store user information
const userInformation = {};

// ask user for their name and store the response in userInformation object
reaLineInterface.question('What is your name? ', (name) => {
  userInformation.name = name;
  // ask user for their age and store the response in userInformation object
  reaLineInterface.question('What is your age? ', (age) => {
    userInformation.age = age;
    // ask user for their occupation and store the response in userInformation object
    reaLineInterface.question('What is your occupation? ', (occupation) => {
      userInformation.occupation = occupation;
      // check if user is over 18
      if (userInformation.age >= 18) {
        console.log("You are over 18.");
      } else {
        console.log("You are under 18.");
      }
      // close the readline interface
      console.table(userInformation);
      // close
      process.exit();

    });
  });

});



