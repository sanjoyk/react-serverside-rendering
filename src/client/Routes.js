import React from "react";
import {Route} from "react-router-dom";
import Home from  "./components/Home";
import UserLists from "./components/userList"

export default ()=>{
    return(
        <div>
            <Route exact path="/" component = {UserLists}/>
            <Route path="/hi" component = {()=> "hi"}/>
        </div>
    )
}