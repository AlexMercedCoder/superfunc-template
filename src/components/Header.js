import { superFunc } from "../lib/sfuncmodule.js";

//The Header Component
export const Header = superFunc({
  builder: (state, props) => `<h1>I am the ${props.word} component</h1>`
})