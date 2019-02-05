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
		const currentVersion = await utils.getCurrentVersionByApiIdentifier(
			CHAMPIONAPIIDENTIFIER
		);
		const localData = utils.getLocalData(CHAMPIONAPIIDENTIFIER);
		const localVersion = localData.version ? localData.version : "0";
		if (localVersion >= currentVersion) {
			console.log(
				"Local champion version is still up to date: return local data!"
			);
			res.send(localData);
		} else {
			console.log(
				"Champion data requires update: updating local champion data now!"
			);
			fetch(
				"http://ddragon.leagueoflegends.com/cdn/" +
					currentVersion +
					"/data/en_US/champion.json"
			)
				.then(response => {
					if (response.ok) {
						response
							.json()
							.then(data => {
								utils.setLocalData(CHAMPIONAPIIDENTIFIER, data);
								res.send(data);
							})
							.catch(err => {
								throw new Error(
									"Reason: response data could not be decrypted!"
								);
							});
					} else {
						throw new Error(
							"Reason: status code on api call was " +
								response.status
						);
					}
				})
				.catch(err => {
					throw new Error(
						"Reason: could not compute the api call" + err
					);
				});
		}
	} catch (err) {
		console.log("Error on /champion: " + err);
		try {
			var localData = utils.getLocalData(CHAMPIONAPIIDENTIFIER);
			if (localData) {
				res.send(localData);
			}
		} catch (err) {
			res.send("Sorry, we can not compute a response for you currently!");
		}
	}
});

app.listen(port);
