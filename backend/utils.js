const fs = require("fs");

module.exports = {
	getCurrentVersionByApiIdentifier: async function(apiIdentifier) {
		const apiVersionUrl = "https://ddragon.leagueoflegends.com/realms/euw.json";
		return (
			fetch(apiVersionUrl)
			.then((response) => {
				response
					.json()
					.then((data) => {
						console.log("Version for the API " + apiIdentifier + " was detected as: " + data.n[apiIdentifier]);
						return data.n[apiIdentifier];
					})
					.catch((err) => {
						console.log("Error: while trying to decrypt response from api for api versions!");
						console.log(err);
					});
			})
			.catch((err) => {
				console.log("Error: while contacting the api to get api versions!");
				console.log(err);
			})
		);
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
			console.log("Error: while trying to write data to local data file for " + fileName);
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
			console.log("Error: while trying to clear data from local data file for " + fileName);
			console.log(fileDeletionError);
			return false;
		}
	}
};
