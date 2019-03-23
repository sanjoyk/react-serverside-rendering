import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/Home";
import { StaticRouter } from "react-router-dom";
import {renderRoutes} from 'react-router-config';
import Routes from "../client/Routes";
import { Provider} from "react-redux";
import createStore from "./createStore";


module.exports = (req, store)=> {
    const content = renderToString( 
        <Provider store = {store}>
            <StaticRouter context={{}} location={req.url}>
                <div>
                    {renderRoutes(Routes)}
                </div>
            </StaticRouter>
        </Provider>
    );
    return `
        <html>
            <body>
                <div id="app">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
}