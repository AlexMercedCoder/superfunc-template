import { superFunc } from "./lib/sfuncmodule.js";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

//The App Component
const App = superFunc({
  builder: (state, props) => `<h1>Hello World</h1>
  <header sfunc="header" word="header"></header>
  <main sfunc="main"></main>
  <footer sfunc="footer"></footer>`,
  assemble: (state, props, target, globals) => {
    const header = Header("header");
    const main = Main("main");
    const footer = Footer("footer");
  },
});

//Inject into body
const body = document.querySelector("body");
body.innerHTML = `<div sfunc="app"></div>`;

App("app");
