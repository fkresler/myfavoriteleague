const express = require('express');
const morgan = require('morgan');
const path = require('path');
const utils = require('./server/utils');

const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/champion', async (req, res) => {
  const CHAMPIONAPIIDENTIFIER = 'champion';
  let localChampionData;
  let latestChampionData;
  let localChampionVersion;
  let latestChampionVersion;
  try {
    localChampionData = utils.getLocalData(CHAMPIONAPIIDENTIFIER);
    localChampionVersion = utils.getLocalVersion(localChampionData);
  } catch (err) {
    localChampionData = localChampionData || {};
    localChampionVersion = localChampionVersion || 0;
  }
  try {
    latestChampionVersion = await utils.getLatestApiVersionByIdentifier(
      CHAMPIONAPIIDENTIFIER,
    );
    if (latestChampionVersion > localChampionVersion) {
      const championApiUrl = `http://ddragon.leagueoflegends.com/cdn/${
        latestChampionVersion
      }/data/en_US/champion.json`;
      latestChampionData = await utils.getJsonDataByApiUrl(
        championApiUrl,
      );
      utils.setLocalData(CHAMPIONAPIIDENTIFIER, latestChampionData);
      res.send(latestChampionData);
    } else {
      res.send(localChampionData);
    }
  } catch (err) {
    res.send(localChampionData);
  }
});

app.listen(port);