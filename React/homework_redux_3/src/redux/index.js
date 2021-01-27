import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducers";

export const store = createStore(reducer, applyMiddleware(thunk));

export * from './action-creators';
export * from './action-types';