let path = require("path");

// for (let i = 1; i <= 10; i++) {
// 	let dirPathToMake = `Lecture-${i}`;
// 	fs.mkdirSync(dirPathToMake);
// 	fs.writeFileSync(
// 		path.join(dirPathToMake, "readme.md"),
// 		`#readme in Lecture-${i}`
// 	);
// }

// gives extension
let ext = path.extname(path.join(__dirname, "abc.js"));
console.log(ext); //.js

//path's file / folder name
let name = path.basename(__dirname);
console.log(name);

name = path.basename(path.join(__dirname, "abc.js"));
console.log(name);
