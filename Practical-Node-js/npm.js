// chalk for color
// figlet for bada bada

let chalk = require("chalk");
let figlet = require("figlet");
// console.log(chalk.blue("Hello World!"));
// console.log(chalk.bold("Hello World!"));
// console.log(chalk.underline("Hello World!"));
// console.log(chalk.bgBlueBright("Hello World!"));

console.log(chalk.bgBlueBright(figlet.textSync("Hello Coder")));
