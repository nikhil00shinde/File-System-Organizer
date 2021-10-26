#!/usr/bin/env node

let inputArr = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");

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
		treeObj.treeKey(inputArr[1]);
		break;
	case "organize":
		organizeObj.organizeKey(inputArr[1]);
		break;
	case "help":
		helpObj.helpKey();
		break;
	default:
		console.log("Please 🙏 Input Right Command");
		break;
}
