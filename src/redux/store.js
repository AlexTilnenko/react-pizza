import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddlevare from "redux-saga";
import rootSaga from "../sagas";

const sagaMiddlevare = createSagaMiddlevare();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddlevare)));
sagaMiddlevare.run(rootSaga);

export default store;
