//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const greeting = {
  greetM: "Good Morning 🌅",
  greetE: "good Evening 🌆",
  greetN: "good Night 🌉"
};

const cust = {
  color: "black",
  border: "2px solid black"
};

let greet_obj;
const currDate = new Date();

if (currDate.getHours() < 12) {
  greet_obj = greeting.greetM;
  cust.color = "green";
} else if (currDate.getHours() > 12 && currDate.getHours < 17) {
  greet_obj = greeting.greetE;
  cust.color = "red";
} else {
  greet_obj = greeting.greetN;
  cust.color = "blue";
}

ReactDom.render(
  <div>
    <h1 style={cust}>{greet_obj}</h1>
  </div>,
  document.getElementById("root")
);
