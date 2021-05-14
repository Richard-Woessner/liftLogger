import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component{

    constructor(props) {
        super(props);
        this.name = 'rick';
    }
    render(){
        return <h1>hello {this.name}</h1>
    }
}

const appDiv = document.getElementById("root");
render(<App />, appDiv);