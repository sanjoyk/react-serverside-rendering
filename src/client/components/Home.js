import React from "react";

const Home = ()=>{
    return (
        <div>
            <div>I'm very first home page!</div>
            <button style={{padding:"8px", fontweight:"bold", fontSize:"14px"}} conClick={()=> console.log("clicked!!")}>Click me!</button>
        </div>
        
    )
}
export default Home;