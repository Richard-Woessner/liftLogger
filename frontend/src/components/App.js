import React, { Component } from "react";
import { render } from "react-dom";


const App = () => {
    const name = 'rick';
    return(
        <div className="APP">
            <h1>hello {name}</h1>
        </div>
    )
}

const appDiv = document.getElementById("root");
render(<App />, appDiv);