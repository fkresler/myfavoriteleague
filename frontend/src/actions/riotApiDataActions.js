import fetch from "cross-fetch";

export const requestStaticChampionData = () => {
    return {
        type: "REQUEST_STATIC_CHAMPION_DATA",
        payload: {
            isFetchingStaticChampionData: true
        }
    };
};

export const receiveStaticChampionData = (isSuccessful, json) => {
    return {
        type: "RECEIVE_STATIC_CHAMPION_DATA",
        payload: {
            isStaticChampionDataCorrect: isSuccessful,
            staticChampionData: json.data,
            isFetchingStaticChampionData: false,
            staticChampionDataReceivedAt: Date.now()
        }
    };
};

const shouldFetchStaticChampionData = state => {
    const riotApiState = state.riotApiDataState;
    if (riotApiState) {
        const currentDate = new Date();
        const lastSuccessfulChampionDataFetch =
            riotApiState.staticChampionDataReceivedAt;
        const isFetchingStaticChampionData =
            riotApiState.isFetchingStaticChampionData;
        if (isFetchingStaticChampionData) {
            return false;
        }
        if (
            lastSuccessfulChampionDataFetch &&
            Math.abs(currentDate - lastSuccessfulChampionDataFetch) / 36e5 > 2
        ) {
            return false;
        }
    }
    return true;
};

const fetchStaticChampionData = () => dispatch => {
    const staticChampionDataApiUrl = "/champion";
    dispatch(requestStaticChampionData);
    return fetch(staticChampionDataApiUrl)
        .then(response => response.json())
        .then(json => dispatch(receiveStaticChampionData(true, json)))
        .catch(error => dispatch(receiveStaticChampionData(false, {})));
};

export const fetchStaticChampionDataIfNeeded = () => (dispatch, getState) => {
    if (shouldFetchStaticChampionData(getState())) {
        return dispatch(fetchStaticChampionData());
    }
};
