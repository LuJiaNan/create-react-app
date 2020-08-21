import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { UIRouter, pushStateLocationPlugin } from "@uirouter/react";

const Hello = () => <h3>hello world</h3>;
const About = () => <h3>Its the UI-Router hello world app!</h3>;

const helloState = { name: "hello", url: "/hello", component: Hello };
const aboutState = { name: "about", url: "/about", component: About };

ReactDOM.render(
  <UIRouter
    plugins={[pushStateLocationPlugin]}
    states={[helloState, aboutState]}
  >
    <App />
  </UIRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
