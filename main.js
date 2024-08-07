// importing inquirer and chalk packages 
import inquirer from "inquirer";
import chalk from "chalk";
//dispaly a colorful welcome message
console.log(chalk.cyanBright.bold("\n\t WELCOME TO SHEIKS WORD COUNTER \n\t"));
console.log("=".repeat(60));
// promt the user to enter the sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter a sentence",
    }
]);
// triming the sentence and split it into a words base on " space"
let words = answers.sentence.trim().split(" ");
// analysis user input mssage
console.log("=".repeat(60));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n- word count : ${chalk.blue.bold(words.length)}`));
console.log("=".repeat(60));
