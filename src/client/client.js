import "babel-polyfill";
import React from 'react';
import ReactDom from "react-dom";
import {  createStore, applyMiddleware} from "redux";
import {  Provider} from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import reducers from "./reducers"

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDom.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>,
    document.querySelector("#app")
);