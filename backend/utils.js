const fs = require("fs");

function getLocalData(name) {
	const fileName = "data/" + name + ".json";
	try {
		var data = fs.readFileSync(fileName, "utf8");
		return data;
	} catch (fileReadingError) {
		console.log(fileReadingError);
		return null;
	}
}

function setLocalData(name, data) {
	const fileName = "data/" + name + ".json";
	try {
		fs.writeFileSync(fileName, data);
		return true;
	} catch (fileWriteError) {
		console.log(fileWriteError);
		return false;
	}
}

function clearLocalData(name) {
	const fileName = "data/" + name + ".json";
	try {
		fs.unlinkSync(fileName);
		return true;
	} catch (fileDeletionError) {
		console.log(fileDeletionError);
		return false;
	}
}
