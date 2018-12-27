const express = require("express");
const morgan = require("morgan");

var app = express();
app.use(morgan("combined"));

app.get("/champions", function(req, res) {
	const apiUrl = "https://www.google.de";
	fetch(apiUrl)
		.then(function(response) {
			if (response.status !== 200) {
				console.log("Error: status code was " + response.status);
				var localData = getLocalData("champions");
				if (localData) {
					res.send(localData);
				}
			}
			response
				.json()
				.then(function(data) {
					setLocalData("champions", data);
					res.send(data);
				})
				.catch(function(err) {
					console.log("Error: response could not be decrypted");
					var localData = getLocalData("champions");
					if (localData) {
						res.send(localData);
					}
				});
		})
		.catch(function(err) {
			console.log("Error: request was not successful");
			var localData = getLocalData("champions");
			if (localData) {
				res.send(localData);
			}
		});
});

app.listen(3001);
