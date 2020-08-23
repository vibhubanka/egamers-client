import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from 'reducers';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
// TODO: push logger into middlewares only if env is not production
const middlewares = [sagaMiddleware, logger];

const store = createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
