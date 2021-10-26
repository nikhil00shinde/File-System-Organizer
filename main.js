let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");

let command = inputArr[0];

let types = {
	media: ["mp4", "mkv"],
	archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz", "vcf"],
	documents: [
		"docx",
		"doc",
		"pdf",
		"xlsx",
		"xls",
		"odt",
		"ods",
		"odp",
		"odg",
		"odf",
		"txt",
		"ps",
		"tex",
		"pptx",
		"word",
		"csv",
	],
	app: ["exe", "dmg", "pkg", "deb"],
	photos: ["jpg", "png", "jpeg", "gif"],
	music: ["mp3"],
};

switch (command) {
	case "tree":
		treeFn(inputArr[1]);
		break;
	case "organize":
		organizeFn(inputArr[1]);
		break;
	case "help":
		helpFn();
		break;
	default:
		console.log("Please 🙏 Input Right Command");
		break;
}

function treeFn(dirPath) {
	console.log("Tree command implemented for ", dirPath);
}

function organizeFn(dirPath) {
	// console.log("Organize command implemented for ", dirPath);
	// 1. input -> directory path given
	if (dirPath == undefined) {
		console.log("Kindly enter the path");
		return;
	} else {
		let doesExist = fs.existsSync(dirPath);
		if (doesExist) {
			// 2. create -> organized_files -> directory

			let destPath = path.join(dirPath, "organized_path");

			if (fs.existsSync(destPath) == false) {
				fs.mkdirSync(destPath);
			}
			organizeHelper(dirPath, destPath);
		} else {
			console.log("Kindly enter the correct path");
			return;
		}
	}
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

// Help fn
function helpFn() {
	console.log(`
     List of all the commands:
            node main.js tree directoryPath
            node main.js organize directoryPath
            node main.js help
    `);
}
