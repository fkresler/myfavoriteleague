require("isomorphic-fetch");
const express = require("express");
const morgan = require("morgan");
const utils = require("./utils");
const path = require("path");

var app = express();
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get("/champions", async function(req, res) {
	const currentVersion = await utils.getCurrentVersionByApiIdentifier("champion");
	const apiUrl = "http://ddragon.leagueoflegends.com/cdn/" + currentVersion + "/data/en_US/champion.json";
	const localData = utils.getLocalData("champions");
	const localVersion = localData.version ? localData.version : "0";
	if(localVersion >= currentVersion) {
		res.send(localData);
	} else {
		fetch(apiUrl)
			.then((response) => {
				if (response.status !== 200) {
					console.log("Error: status code was " + response.status);
					console.log("Full response: " + {response});
					var localData = utils.getLocalData("champions");
					if (localData) {
						res.send(localData);
					}
				} else {
					response
						.json()
						.then((data) => {
							utils.setLocalData("champions", data);
							res.send(data);
						})
						.catch((err) => {
							console.log("Error: response could not be decrypted");
							var localData = utils.getLocalData("champions");
							if (localData) {
								res.send(localData);
							} else {
								res.send("Error: No data found!");
							}
						});
				}
			})
			.catch((err) => {
				console.log("Error: request was not successful");
				var localData = utils.getLocalData("champions");
				if (localData) {
					res.send(localData);
				}
			});
	}
});

app.listen(3001);
