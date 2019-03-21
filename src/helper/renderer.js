import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/Home";

module.exports = ()=> {
    const content = renderToString(<Home/>);
    return `
        <html>
            <body>
                <div id="app">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
}