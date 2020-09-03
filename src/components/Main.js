import { superFunc } from "../lib/sfuncmodule.js";

//The Main Component
export const Main = superFunc({
  state: {word: 'main'},
  builder: (state, props) => `<h1>I am the ${state.word} component</h1><button>Click Me</button>`,
  assemble: (state, props, target, globals) => {
    document.querySelector('button').addEventListener('click', () => {
      globals.setState({word: 'Main'})
    })
  }
})
