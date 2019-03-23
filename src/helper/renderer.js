import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import {renderRoutes} from 'react-router-config';
import Routes from "../client/Routes";
import { Provider} from "react-redux";
import serialize from "serialize-javascript";

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
                <script>window.INITIAL_STATE=${serialize(store.getState())}</script>
            </body>
        </html>
    `;
}