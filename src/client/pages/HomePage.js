import React from "react";

const HomePage = ()=>{
    return (
        <div>
            <div>I'm very first home page!</div>
            <button style={{padding:"8px", fontWeight:"bold", fontSize:"14px"}} onClick={()=> console.log("clicked!!")}>Click me!</button>
        </div>
        
    )
}
export default {
    component: HomePage
};