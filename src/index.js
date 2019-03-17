import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";

const app = express();

app.use(express.static("public"))

app.get("/", (req, res)=>{
    const content = renderToString(<Home/>);
    const html = `
        <html>
            <body>
                <div id="app">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
    res.send(html);
})

app.listen(3000, ()=>{
    console.log("App is listening at post 3000.")
})