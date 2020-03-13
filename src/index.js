import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchActions } from './store/sagas/index';
import App from './App';
import searchReducer from './store/reducers/searchReducer';
import userReducer from './store/reducers/userReduser';
import reposReducer from './store/reducers/reposReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    searchUsers: searchReducer,
    fetchUser: userReducer,
    fetchRepos: reposReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchActions)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
ReactDOM.render( app, document.getElementById( 'app' ) );
