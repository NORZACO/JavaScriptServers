

// node Templates/static/index.js --user NORZACOAS --greeting MWAMUZISCODE.COM
process.stdin.on("data", name => {
    process.stdout.write(`\n \n  ${name.toString().trim()} \n \n `);
    process.exit();

})



const questions = [
    "If you could have any superpower, what would it be and why?",
    "What is the craziest dream you've ever had?",
    "If you could go back in time and witness any event in history, what would it be?",
    "If you could switch lives with one person for a day, who would it be and why?",
    "If you could have dinner with any fictional character, who would it be and why?",
    "If you could travel to any planet in the solar system, which one would you choose and why?",
    "If you could be any animal for a day, what animal would you be and why?",
    "If you could only eat one type of food for the rest of your life, what would it be?",
    "If you could switch places with one person from any time period, who would it be and why?",
    "If you could have any job in the world, what would it be and why?"
];

const answers = [
    "If I could have any superpower, I would choose the ability to fly. It would be amazing to be able to soar through the air and see the world from a different perspective.",
    "The craziest dream I've ever had was one where I was a giant, towering over buildings and people. I could control the weather and use my powers to save the day.",
    "If I could go back in time and witness any event in history, I would choose to see the signing of the Declaration of Independence. It would be fascinating to see such an important moment in our nation's history firsthand.",
    "If I could switch lives with one person for a day, I would choose to be Elon Musk. I'm fascinated by all of the innovative things he's working on, and it would be amazing to experience what it's like to be him for a day.",
    "If I could have dinner with any fictional character, I would choose Harry Potter. I've always been a huge fan of the books and movies, and I think it would be an unforgettable experience to have dinner with him."
];

let random = Math.floor(Math.random() * questions.length);
let randomaswer = Math.floor(Math.random() * answers.length)

const ask = () => {
    process.stdout.write(`\n \n \n `)
    process.stdout.write(questions[random]);
    process.stdout.write(`\n \n \n `)
}

process.stdin.on("data", data => {
    process.stdout.write(`\n \n \n `)
    process.stdout.write(answers[randomaswer]);
    process.stdout.write(`\n \n \n `)
    process.exit();
})


ask();


process.on("exit", () => {
    process.stdout.write(`\n \n \n `)
    // const [name, activaty, language ] = answers
    process.stdout.write(`Go ${random[answers]} ${random[questions]}.`)
    process.stdout.write(`\n \n \n `)
})