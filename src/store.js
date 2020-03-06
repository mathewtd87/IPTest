import { createStore, combineReducers } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';

import countReducer from "./reducers/countReducer";

export default createStore(
    combineReducers({
        count: countReducer,
    }),
    {},
    composeWithDevTools()
);