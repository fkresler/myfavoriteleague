export function requestStaticChampionData() {
    return {
        type: "REQUEST_STATIC_CHAMPION_DATA"
    };
}

export function receiveStaticChampionData(json) {
    return {
        type: "RECEIVE_STATIC_CHAMPION_DATA",
        payload: {
            data: json.data,
            receivedAt: Date.now()
        }
    };
}
