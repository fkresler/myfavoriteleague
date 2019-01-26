require("isomorphic-fetch");
const express = require("express");
const morgan = require("morgan");
const utils = require("./utils");

var app = express();
app.use(morgan("combined"));

app.get("/champions", function(req, res) {
	const apiUrl = "http://ddragon.leagueoflegends.com/cdn/9.2.1/data/en_US/champion.json";
	fetch(apiUrl)
		.then(function(response) {
			if (response.status !== 200) {
				console.log("Error: status code was " + response.status);
				var localData = utils.getLocalData("champions");
				if (localData) {
					res.send(localData);
				}
			}
			response
				.json()
				.then(function(data) {
					utils.setLocalData("champions", data);
					res.send(data);
				})
				.catch(function(err) {
					console.log("Error: response could not be decrypted");
					var localData = utils.getLocalData("champions");
					if (localData) {
						res.send(localData);
					} else {
						res.send("Error: No data found!");
					}
				});
		})
		.catch(function(err) {
			console.log("Error: request was not successful");
			var localData = utils.getLocalData("champions");
			if (localData) {
				res.send(localData);
			}
		});
});

app.listen(3001);
