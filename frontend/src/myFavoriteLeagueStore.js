import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import myfavoriteleaguereduxlogger from "redux-logger";
import myfavoriteleaguereducer from "./reducers";
import Cookies from "js-cookie";

const MY_FAVORITE_LEAGUE_COOKIE_NAME = "myfavoriteleagueappstate";

// Read previous user data state from cookies
let previousUserDataState = Cookies.get(MY_FAVORITE_LEAGUE_COOKIE_NAME);
previousUserDataState = previousUserDataState
    ? JSON.parse(previousUserDataState)
    : {};
// If there was a user id try to recreate the previous state from the backend information

// Define cookie middleware
const synchronizeCookieData = ({getState}) => {
    return next => action => {
        const result = next(action);
        const currentState = getState();
        const userDataState = currentState ? currentState.userDataState : {};
        Cookies.set(
            MY_FAVORITE_LEAGUE_COOKIE_NAME,
            JSON.stringify(userDataState)
        );
        return result;
    };
};

// Combine middleware
const myfavoriteleaguemiddleware = applyMiddleware(
    thunk,
    myfavoriteleaguereduxlogger,
    synchronizeCookieData
);

// Create store
export default createStore(
    myfavoriteleaguereducer,
    previousState,
    myfavoriteleaguemiddleware
);
