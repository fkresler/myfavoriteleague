const fs = require("fs");

module.exports = {
	getCurrentVersionByApiIdentifier: async function(apiIdentifier) {
		try {
			const apiVersionUrl = "https://ddragon.leagueoflegends.com/realms/euw.json";
			let apiVersionsResponse = await fetch(apiVersionUrl);
			let apiVersionsData = await apiVersionsResponse.json();
			if(apiVersionsData.n[apiIdentifier]) {
				return apiVersionsData.n[apiIdentifier];
			} else {
				throw new Error("Version for the API " + apiIdentifier + " was not found!");
			}
		} catch(err) {
			console.log("getCurrentVersionByApiIdentifier: " + err);
		}
	},
	getLocalData: function(name) {
		const fileName = "data/" + name + ".json";
		try {
			var data = fs.readFileSync(fileName, "utf8");
			var jsonData = JSON.parse(data);
			return jsonData;
		} catch (fileReadingError) {
			console.log("Error: while trying to read data from local data file for " + fileName);
			console.log(fileReadingError);
		}
	},
	setLocalData: function(name, data) {
		const fileName = "data/" + name + ".json";
		try {
			var jsonData = JSON.stringify(data);
			fs.writeFileSync(fileName, jsonData);
		} catch (fileWriteError) {
			console.log("Error: while trying to write data to local data file for " + fileName);
			console.log(fileWriteError);
		}
	},
	clearLocalData: function(name) {
		const fileName = "data/" + name + ".json";
		try {
			fs.unlinkSync(fileName);
		} catch (fileDeletionError) {
			console.log("Error: while trying to clear data from local data file for " + fileName);
			console.log(fileDeletionError);
		}
	}
};
