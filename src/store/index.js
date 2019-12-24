import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { 
    offlineMiddleware,
    suspendSaga,
    consumeActionMiddleware, 
 } from "redux-offline-queue";
import reducers from './ducks';
import rootSaga from "./sagas";

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(offlineMiddleware());
middlewares.push(suspendSaga(sagaMiddleware));
middlewares.push(consumeActionMiddleware());

const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);
export default store;