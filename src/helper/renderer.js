import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/Home";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";

module.exports = (req)=> {
    const content = renderToString(
        <StaticRouter context={{}} location={req.path}>
            <Routes/>
        </StaticRouter>
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