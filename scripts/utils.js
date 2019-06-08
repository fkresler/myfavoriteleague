const fetch = require('isomorphic-fetch');
const fs = require('fs');

async function getJsonDataByApiUrl(apiUrl) {
  const response = await fetch(apiUrl);
  if (response.ok) {
    return response.json();
  }
  throw new Error(
    `API call to ${
      apiUrl
    } returned with status code ${
      response.status}`,
  );
}

async function getLatestApiVersionByIdentifier(apiIdentifier) {
  const apiVersionUrl = 'https://ddragon.leagueoflegends.com/realms/euw.json';
  const apiVersionsData = await getJsonDataByApiUrl(apiVersionUrl);
  if (apiVersionsData.n[apiIdentifier]) {
    return apiVersionsData.n[apiIdentifier];
  }
  throw new Error(
    `Version for the API ${apiIdentifier} was not found`,
  );
}

function getLocalVersion(localData) {
  if (localData && localData.version) {
    return localData.version;
  }
  throw new Error('No local data available!');
}

function getLocalData(name) {
  const fileName = `data/${name}.json`;
  const data = fs.readFileSync(fileName, 'utf8');
  return JSON.parse(data);
}

function setLocalData(name, data) {
  const fileName = `data/${name}.json`;
  const jsonData = JSON.stringify(data);
  fs.writeFileSync(fileName, jsonData);
}

function clearLocalData(name) {
  const fileName = `data/${name}.json`;
  fs.unlinkSync(fileName);
}

module.exports = {
  getJsonDataByApiUrl,
  getLatestApiVersionByIdentifier,
  getLocalVersion,
  getLocalData,
  setLocalData,
  clearLocalData,
};
