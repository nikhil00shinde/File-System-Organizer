let fs = require("fs");
let path = require("path");

function organizeFn(dirPath) {
	// console.log("Organize command implemented for ", dirPath);
	// 1. input -> directory path given
	let destPath;
	if (dirPath == undefined) {
		// cwd => curent working directory
		destPath = process.cwd();
		return;
	} else {
		let doesExist = fs.existsSync(dirPath);
		if (doesExist) {
			// 2. create -> organized_files -> directory

			destPath = path.join(dirPath, "organized_path");

			if (fs.existsSync(destPath) == false) {
				fs.mkdirSync(destPath);
			}
		} else {
			console.log("Kindly enter the correct path");
			return;
		}
	}
	organizeHelper(dirPath, destPath);
}
function organizeHelper(src, dest) {
	// 3. identify categories of all the files present innthat input directory

	let childNames = fs.readdirSync(src);

	for (let i = 0; i < childNames.length; i++) {
		let childAddress = path.join(src, childNames[i]);

		let isFile = fs.lstatSync(childAddress).isFile();

		if (isFile) {
			//4. copy/cut files to that oragized inside of any of category folder
			let category = getCategory(childNames[i]);
			sentFiles(childAddress, dest, category);
		}
	}
}

function sentFiles(srcFiles, dest, category) {
	let categoryPath = path.join(dest, category);

	if (fs.existsSync(categoryPath) == false) {
		fs.mkdirSync(categoryPath);
	}

	let fileName = path.basename(srcFiles);

	let destFilePath = path.join(categoryPath, fileName);

	fs.copyFileSync(srcFiles, destFilePath);
	fs.unlinkSync(srcFiles);
}

function getCategory(name) {
	let extName = path.extname(name);
	extName = extName.slice(1);

	for (let type in types) {
		let cTypeArray = types[type];

		for (let i = 0; i < cTypeArray.length; i++) {
			if (cTypeArray[i] == extName) {
				return type;
			}
		}
	}
	return "others";
}

module.exports = {
	organizeKey: organizeFn,
};
