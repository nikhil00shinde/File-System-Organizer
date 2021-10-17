let cp = require("child_process");

//OPENING CALCULATOR

// console.log("Trying to open Calculator");
// cp.execSync("calc");
// console.log("Opened Calculator");

// OPENING VSCODE

// console.log("Trying to open vscode");
// cp.execSync("code");
// console.log("Opened vscode");

// OPENING CHROME

console.log("Trying to open our website");
// cp.execSync("start chrome https:\\www.pepcoding.com");
console.log("Opened chrome");

// RUNNING CODE
let output = cp.execSync("node abc.js");
console.log(output+"");
