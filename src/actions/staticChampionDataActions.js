import fetch from 'cross-fetch';
import { STATIC_CHAMPION_DATA_NAME } from '../Reducers';

export const requestStaticChampionData = () => ({
  type: 'REQUEST_STATIC_CHAMPION_DATA',
  payload: {
    isFetchingStaticChampionData: true,
  },
});

export const receiveStaticChampionData = (isSuccessful, json) => ({
  type: 'RECEIVE_STATIC_CHAMPION_DATA',
  payload: {
    isStaticChampionDataCorrect: isSuccessful,
    staticChampionData: json.data,
    isFetchingStaticChampionData: false,
    staticChampionDataReceivedAt: Date.now(),
  },
});

const shouldFetchStaticChampionData = (state) => {
  const staticChampionDataState = state[STATIC_CHAMPION_DATA_NAME];
  if (staticChampionDataState) {
    const currentDate = new Date();
    const { staticChampionDataReceivedAt, isFetchingStaticChampionData } = staticChampionDataState;
    if (isFetchingStaticChampionData) {
      return false;
    }
    if (staticChampionDataReceivedAt
      && Math.abs(currentDate - staticChampionDataReceivedAt) / 36e5 > 2
    ) {
      return false;
    }
  }
  return true;
};

const fetchStaticChampionData = () => (dispatch) => {
  const staticChampionDataApiUrl = '/api/champion';
  dispatch(requestStaticChampionData);
  return fetch(staticChampionDataApiUrl)
    .then(response => response.json())
    .then(json => dispatch(receiveStaticChampionData(true, json)))
    .catch(() => dispatch(receiveStaticChampionData(false, {})));
};

export const fetchStaticChampionDataIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchStaticChampionData(getState())) {
    return dispatch(fetchStaticChampionData());
  }
  return null;
};
