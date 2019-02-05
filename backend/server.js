require("isomorphic-fetch");
const express = require("express");
const morgan = require("morgan");
const utils = require("./utils");
const path = require("path");

var app = express();
var port = process.env.PORT || 3001;

app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/champion", async (req, res) => {
	const CHAMPIONAPIIDENTIFIER = "champion";
	try {
		let currentVersion = await utils.getCurrentVersionByApiIdentifier(CHAMPIONAPIIDENTIFIER);
		let localData = utils.getLocalData(CHAMPIONAPIIDENTIFIER);
		let localVersion = localData ? localData.version : "0";
		if(localData && localVersion >= currentVersion) {
			console.log("Local champion version is still up to date: return local data!");
			res.send(localData);
		} else {
			console.log("Champion data requires update: updating local champion data now!");
			let apiResponse = await fetch("http://ddragon.leagueoflegends.com/cdn/" + currentVersion + "/data/en_US/champion.json")
			if (apiResponse.ok) {
				let apiResponseDataJson = await apiResponse.json()
				utils.setLocalData(CHAMPIONAPIIDENTIFIER, apiResponseDataJson);
				res.send(apiResponseDataJson);
			} else {
				throw new Error("Reason: status code on api call was " + response.status);
			}
		}
	} catch (err) {
		console.log("Error on /champion: " + err);
        res.send("This could be an error page!");
	}
});

app.listen(port);
