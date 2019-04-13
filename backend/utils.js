const fs = require("fs");

async function getJsonDataByApiUrl(apiUrl) {
    let response = await fetch(apiUrl);
    let jsonData;
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error(
            "API call to " +
                apiUrl +
                " returned with status code " +
                response.status
        );
    }
}

async function getLatestApiVersionByIdentifier(apiIdentifier) {
    const apiVersionUrl = "https://ddragon.leagueoflegends.com/realms/euw.json";
    let apiVersionsData = await getJsonDataByApiUrl(apiVersionUrl);
    if (apiVersionsData.n[apiIdentifier]) {
        return apiVersionsData.n[apiIdentifier];
    } else {
        throw new Error(
            "Version for the API " + apiIdentifier + " was not found"
        );
    }
}

function getLocalVersion(localData) {
    if (localData && localData["version"]) {
        return localData["version"];
    } else {
        throw new Error("No local data available!");
    }
}

function getLocalData(name) {
    const fileName = "data/" + name + ".json";
    let data = fs.readFileSync(fileName, "utf8");
    return JSON.parse(data);
}

function setLocalData(name, data) {
    const fileName = "data/" + name + ".json";
    let jsonData = JSON.stringify(data);
    fs.writeFileSync(fileName, jsonData);
}

function clearLocalData(name) {
    const fileName = "data/" + name + ".json";
    fs.unlinkSync(fileName);
}

module.exports = {
    getJsonDataByApiUrl: getJsonDataByApiUrl,
    getLatestApiVersionByIdentifier: getLatestApiVersionByIdentifier,
    getLocalVersion: getLocalVersion,
    getLocalData: getLocalData,
    setLocalData: setLocalData,
    clearLocalData: clearLocalData
};
