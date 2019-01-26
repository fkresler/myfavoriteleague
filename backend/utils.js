const fs = require("fs");

module.exports = {
	getLocalData: function(name) {
		const fileName = "data/" + name + ".json";
		try {
			var data = fs.readFileSync(fileName, "utf8");
			var jsonData = JSON.parse(data);
			return jsonData;
		} catch (fileReadingError) {
			console.log(fileReadingError);
			return null;
		}
	},
	setLocalData: function(name, data) {
		const fileName = "data/" + name + ".json";
		try {
			var jsonData = JSON.stringify(data);
			fs.writeFileSync(fileName, jsonData);
			return true;
		} catch (fileWriteError) {
			console.log(fileWriteError);
			return false;
		}
	},
	clearLocalData: function(name) {
		const fileName = "data/" + name + ".json";
		try {
			fs.unlinkSync(fileName);
			return true;
		} catch (fileDeletionError) {
			console.log(fileDeletionError);
			return false;
		}
	}
};
