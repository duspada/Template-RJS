import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import Reactotron from 'reactotron-react-js'

import history from '../routes/history';
import rootReducer from './ducks';
import rootSaga from './sagas';

const sagaMonitor = Reactotron.createSagaMonitor()
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(rootReducer(history), applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
