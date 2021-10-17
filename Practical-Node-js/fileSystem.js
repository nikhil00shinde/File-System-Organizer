// fileSystem
// CRUD on file / folder
// files -> create  ,read                  ,update,delete
//          open -w, readfileSync writefileSync, appendFile, unlinkSync
let fs = require("fs");

//read
// let buffer = fs.readFileSync("abc.js");
// console.log(buffer + "");

//create
// fs.openSync("abc.txt", "w");

//no file -> create and file exist -> content replace
// create write
// fs.writeFileSync("abc.txt", "Hum aaj khush nhi hai");

// update
// fs.appendFileSync("abc.txt", "Bhai khush kyu nhi hai");

// FOLDER(directory)
//create        read           delete
// mkdirSync   readdirSync     rmdirSync



// fs.mkdirSync("meriDirectory");
// fs.writeFileSync("meriDirectory/meriFile.txt", "Mera Content");

//read
// let content = fs.readdirSync("meriDirectory");
// console.log(content);

// for (let i = 0; i < content.length; i++) {
//remove file
// fs.unlinkSync(`meriDirectory/${content[i]}`);
// }

// remove folder
// fs.rmdirSync("meriDirectory");

// fs.existSync -> if a file exist at a path -> true , not then -> fasle

// let doesPathExist = fs.existsSync("abc.txt");
// console.log(doesPathExist);
// doesPathExist = fs.existsSync("abcd.txt");
// console.log(doesPathExist);

//fs.lstatSync -> check if it is folder or file
// __dirname -> aap kis folder ke andhar kaam kar rahe ho
// let detailsObj = fs.lstatSync(__dirname + "\\fileSystem.js");
// let ans = detailsObj.isFile();
// console.log(ans);
// ans = detailsObj.isDirectory();
// console.log(ans);




// Activity
for(let i=1;i<=10;i++)
{
    let dirPathToMake = `Lecture-${i}`;
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(dirPathToMake+"\\"+"readme.md",`#readme in Lecture-${i}`)

}