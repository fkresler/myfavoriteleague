const MY_FAVORITE_LEAGUE_ID = 'myfavoriteleague';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(MY_FAVORITE_LEAGUE_ID);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const filterAndSaveState = (toBeSavedState, allowedIds) => {
  try {
    const filteredState = Object.keys(toBeSavedState)
      .filter(key => allowedIds.includes(key))
      .reduce((obj, key) => ({
        ...obj,
        [key]: toBeSavedState[key],
      }), {});
    const serializedState = JSON.stringify(filteredState);
    localStorage.setItem(MY_FAVORITE_LEAGUE_ID, serializedState);
  } catch (err) {
    // do something with the error
  }
};
