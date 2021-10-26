let fs = require("fs");
let path = require("path");

function treeFn(dirPath) {
	if (dirPath == undefined) {
		treeHelper(process.cwd(), "");
		return;
	} else {
		let doesExist = fs.existsSync(dirPath);
		if (doesExist) {
			treeHelper(dirPath, "");
		} else {
			console.log("Kindly enter the correct path");
			return;
		}
	}
}
function treeHelper(dirPath, intend) {
	//is file or folder
	let isFile = fs.lstatSync(dirPath).isFile();

	if (isFile == true) {
		let fileName = path.basename(dirPath);
		console.log(intend + "├──" + fileName);
	} else {
		let dirName = path.basename(dirPath);
		console.log(intend + "└──" + dirName);
		let childrens = fs.readdirSync(dirPath);

		for (let i = 0; i < childrens.length; i++) {
			let childPath = path.join(dirPath, childrens[i]);
			treeHelper(childPath, intend + "\t");
		}
	}
}

module.exports = {
	treeKey: treeFn,
};
