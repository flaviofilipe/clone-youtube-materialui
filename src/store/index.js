import { createStore, compose, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';
import sagas from './sagas';
import reducers from './ducks';

const sagaMiddleware = createSaga();

// const dev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
    reducers,
    compose(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(sagas);