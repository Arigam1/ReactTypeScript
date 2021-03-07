import { rootReducer } from './reducers/redux-store';
import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";


export const store = createStore(rootReducer, applyMiddleware(thunk))
