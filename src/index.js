import React from "react";
import ReactDOM from "react-dom";

const myName = "Khoshow";
const year = new Date().getFullYear();
console.log(year);

ReactDOM.render(
  <div>
    <h1>ello</h1>
    <p>Created By {myName}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
