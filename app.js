import React from "react"
import ReactDOM from "react-dom/client";
// part 1 > render div.root via javascript no react
/* const heading = document.createElement("h1");
heading.innerHTML= "hellow via javascript";
*/

//methord 1 (part 1) js
/* const rootinjector = document.getElementById("root");
rootinjector.appendChild(heading);
*/
//or
//methord 2 comprerssed methord my methord (part 2) js
// document.getElementById("root").appendChild(heading);


//part 2 react
//#1
// const heading = React.createElement("h1", {Id:"heading", class: "classred"}, "hello from react via cdn");
//notes > react.createElement creates an object not html code  #> reatDOM converts that object into html code that browser understand 

// methord 2 nr suggested
// const root = ReactDOM.createRoot(document.getElementById("rooot"))
// root.render(heading)


//methord 1 vs suggested
//#2
// ReactDOM.render(heading, document.getElementById('rooot'));


//creatign structure like below-----------------------------------------------------------------------------------
/*
<div Id="parent">
    <div id="child">
        <h1> heading under div </h1>
        <h2> heading under div </h2>
    </div>
    <div id="child2">
        <h1> heading under div </h1>
        <h2> heading under div </h2>
    </div>
</div>
*/

/* episod 3
const parent = React.createElement("div", {id: "parent"},[ 
React.createElement("div", {id: "child"},[
// to pass multiple element in same div level we use arrrar [a,b,c,d]
    React.createElement("h1", {className: "classred"},"heading under div"),
    React.createElement("h2", {className: "classred"},"heading 2 h2 under div")
]),
React.createElement("div", {id: "child2"},[
    // to pass multiple element in same div level we use arrrar [a,b,c,d]
        React.createElement("h1", {className: "classred"},"heading under div child 2"),
        React.createElement("h2", {className: "classred"},"heading 2 h2 under div child 2")
    ])
]);

//jsx
 
console.log(parent)
// ReactDOM.render(parent, document.getElementById('rooot'));

const root = ReactDOM.createRoot(document.getElementById("rooot"))
root.render(parent)
*/

