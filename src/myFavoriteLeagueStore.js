import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import myfavoriteleaguereduxlogger from 'redux-logger';
import myfavoriteleaguereducer, { toBeSavedData } from './Reducers';
import { loadState, filterAndSaveState } from './Utils/storageUtils';

const previousState = loadState();

const permanentStorageMiddleware = store => next => (action) => {
  next(action);
  filterAndSaveState(store.getState(), toBeSavedData);
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
