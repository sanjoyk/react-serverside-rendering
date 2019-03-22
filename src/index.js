import "babel-polyfill";
import express from "express";
import renderer from "./helper/renderer";
import createStore from "./helper/createStore";



const app = express();

app.use(express.static("public"));



app.get("*", (req, res)=>{
    const store = createStore();

    //some logic to initialize 
    //and load initial data
    res.send(renderer(req, store));

});




// app.get("/hi", (req, res)=> res.send("hi"))

app.listen(3000, ()=>{
    console.log("App is listening at post 3000.")
})