import React from "react"
import ReactDOM from "react-dom"
import Tree from "./Tree";

window.onload = () => {

    ReactDOM.render(
        <Tree/>,
        document.getElementById("root"),
        () => console.log("ready"))

};
