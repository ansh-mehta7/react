import React from "react";
import ReactDOM from "react-dom/client";

import { jsx } from "react/jsx-runtime";
/* 
const container = React.createElement("h1", {}, "ansh mehta loves SUITS");
console.log(container);
*/

// this is core react
/*
 React.createElement => ReactElement-JS Object → HTMLElement(render)
*/
// React.createElement is an object

/*
jsx is an convention where we merge this html and js together 
jsx is not a html it is not writing html in jas 
it has an html like syntax it  just looks like html
*/
const reactElement = <h1>this is a jsx </h1>; // using jsx
const number=10000;

const Jsxcontainer = () => (
  <div>
    {number}
    <h1 className="jsxcontainer">this is a proper valid jsx 🚀 syntax</h1>
    <h2>learning is fun </h2>
  </div>
);

// we can also create a noraml function also

const Title = function () {
  return (
    <div>
      <h1> title ansh</h1>
      <h2>mehta</h2>
    </div>
  );
};

// console.log(jsxcontainer);
/*
 here jsx is transpiling before it reaches the js ye kaam babel kr rha hai
*/
/*
 JSX->babel transpiles it to React.createElement => ReactElement-JS Object → HTMLElement(render)
*/
// consoling this will give error bcoz this is not a js
// js engine cant understaqnd this

// this is how we write jsx

// functional component ->a functina that return a jsx code(jsx i a react element so functiona component retuen the react element )

// ---------------------------------------------------------------------------------------------
// const demo = () => true;

// const demo2 = () => {
//   return true;
// };
// functional compnent

const Headingcomponent = () => {
  return <h1>my name is khan</h1>;
};

const Headcomponent2 = () => (
  <div id="container">
    {Title()}
    <Jsxcontainer />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

// this 2 component structure is same

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headcomponent2 />);
