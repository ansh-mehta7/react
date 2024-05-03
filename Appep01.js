import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement("h1",{id:"heading",class:"first-class"},"my name is khan");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// nested structure inn react
/*

<div>
   <div>
   <h1>my name is ansh mehta</h1>
   <h4> namste react </h4>
   </div>
   <div>
  <p>jab pyaar kia to darna kya </p>
   </div>
</div>

*/

const container = React.createElement(
  "div",
  {},
  React.createElement("div", {}, [
    React.createElement("h1", {}, "SUITS"),
    React.createElement("h4", {}, "jessica pearson"),
  ]),
  React.createElement("p", {}, "harevy ad rachel")
  
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
