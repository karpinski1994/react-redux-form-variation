import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    AppContainer
} from "./App";
import {connect} from 'react-redux';
import {
    Provider
} from 'react-redux';
import {
    createStore,
} from 'redux';
import reducers from './reducers';
import {
    usersFetched
} from "./actions";
import {
    store
} from "./store";


ReactDOM.render( 
    <Provider store = {store}>
    < AppContainer />
    </Provider>,
    document.getElementById("root")
);
