import express from "express";
import renderer from "./helper/renderer";

const app = express();

app.use(express.static("public"))

app.get("*", (req, res)=>{
    res.send(renderer(req));
});

// app.get("/hi", (req, res)=> res.send("hi"))

app.listen(3000, ()=>{
    console.log("App is listening at post 3000.")
})