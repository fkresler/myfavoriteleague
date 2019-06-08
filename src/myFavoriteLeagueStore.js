import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import myfavoriteleaguereduxlogger from 'redux-logger';
import myfavoriteleaguereducer from './reducers';
import { getPreviousStateData } from './utils/stateUtils';

const previousState = getPreviousStateData();

// Combine middleware
const myfavoriteleaguemiddleware = applyMiddleware(
  thunk,
  myfavoriteleaguereduxlogger,
);

// Create store
export default createStore(
  myfavoriteleaguereducer,
  previousState,
  myfavoriteleaguemiddleware,
);
