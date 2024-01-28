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
 
console.log(parent)
// ReactDOM.render(parent, document.getElementById('rooot'));

const root = ReactDOM.createRoot(document.getElementById("rooot"))
root.render(parent)
*/



//ep 3 jsx
//heading using react
// const heading = React.createElement("h1", { id: "heading", className: "classred" }, "This is a heading from React");
// console.log(heading);

// // heading using JSX
// const jsxHeading = <h1 className="head">This is a JSX heading</h1>;
// console.log(jsxHeading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const rooot = ReactDOM.createRoot(document.getElementById("rooot"));

// root.render(heading);
// rooot.render(jsxHeading);

//  >>  react component -------------------------------------------------- 
// class based component > old methord
// functional component > new methord



//react funtional component
// >> methord 1
/*
const HeadingComponent =() => {
return (
    <div>
        <h1 className='head'>Hello from Functional Component</h1>
        <h1 className='head'>Hello from Functional Component</h1>
        <p className="abc">Hello from Functional Component para</p>
        <h2 className="abc">this is a 3 heading</h2>
    </div>
)};
*/

// javascript and html combined into jsx (its not html or js its jsx)
//component 
/* st3 
const Heading = () => (
    <h1 className="head">hellow using jsx multiple line code snippet title </h1>
);
//react element
const elem = <b>react nest element</b> //nest this elemnt into headelement > element into element >> and then element into component
const headelement = (
    <div>
    <h1 className="head">{elem}head element in jsx with jst itself and javascript </h1>
    {elem}
    </div>
);

const numberelement = 1000; //js code
// methord 2
//component

st3
const HeadingComponent =() => (
    
        <div>
            <h1 className='head'>Hello from Functional Component</h1>
            <h2>{numberelement} {100 + 200}  </h2>
            {console.log("this a console log in jsx") }
            
            <h2 className="abc">3 ways to call a component as a compont and as a function </h2> 
            <Heading></Heading>
            <Heading/>
            {Heading()}
            {headelement}
        </div>
    );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
*/
// ---------------------------------------------------------------------------------------- food app
// stage 4 
/*
structure
 header 
   logo
   menu
 body
   search
   rest container
     rest card > multiple
 footer
  copyright
  links
  address
  contact

*/

import {Header} from "./components/Header";
import Body from "./components/Body";





const AppLayout = () => {
 return(
        <div className="app"> 
        <Header/>
        <Body/> 
        </div>
        
)};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);