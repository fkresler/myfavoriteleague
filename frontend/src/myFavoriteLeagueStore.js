import {applyMiddleware, createStore} from "redux";
import myfavoriteleaguereduxlogger from "redux-logger";
import myfavoriteleaguereducer from "./reducers";
import Cookies from "js-cookie";

const MY_FAVORITE_LEAGUE_COOKIE_NAME = "myfavoriteleagueappstate";

// Read previous state from cookies
let previousState = Cookies.get(MY_FAVORITE_LEAGUE_COOKIE_NAME);
previousState = previousState ? JSON.parse(previousState) : {};

// Define cookie middleware
const synchronizeCookieData = ({getState}) => {
    return next => action => {
        const result = next(action);
        Cookies.set(MY_FAVORITE_LEAGUE_COOKIE_NAME, JSON.stringify(getState()));
        return result;
    };
};

// Combine middleware
const myfavoriteleaguemiddleware = applyMiddleware(
    myfavoriteleaguereduxlogger,
    synchronizeCookieData
);

// Create store
export default createStore(
    myfavoriteleaguereducer,
    previousState,
    myfavoriteleaguemiddleware
);
