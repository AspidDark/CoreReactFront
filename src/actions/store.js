import {createStore, applyMiddleware, compose} from 'redux'; 
import thunk from 'redux-thunk';
import {reducers} from '../reducers'; //index.js


export const store=createStore
(
    //reducers
    reducers,
    compose(
        applyMiddleware(thunk)),
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)