import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import myfavoriteleaguereduxlogger from 'redux-logger';
import throttle from 'lodash/throttle';
import myfavoriteleaguereducer, { toBeSavedData } from './Reducers';
import { loadState, filterAndSaveState } from './Utils/storageUtils';

const previousState = loadState();

const permanentStorageMiddleware = store => nextState => (action) => {
  nextState(action).then(throttle(() => {
    filterAndSaveState(store.getState(), toBeSavedData);
  }), 2000);
};

// Combine middleware
const myfavoriteleaguemiddleware = applyMiddleware(
  thunk,
  myfavoriteleaguereduxlogger,
  permanentStorageMiddleware,
);

// Create store
export default createStore(
  myfavoriteleaguereducer,
  previousState,
  myfavoriteleaguemiddleware,
);
