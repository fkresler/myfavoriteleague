import {applyMiddleware, createStore} from "redux";
import myfavoriteleaguereduxlogger from "redux-logger";
import myfavoriteleaguereducer from "./reducers";

const myfavoriteleaguemiddleware = applyMiddleware(
    myfavoriteleaguereduxlogger()
);

export default createStore(myfavoriteleaguereducer, myfavoriteleaguemiddleware);
