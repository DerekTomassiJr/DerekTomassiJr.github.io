/*
  React uses a markup language called JSX.
  JSX looks very much like HTML. 

  https://reactjs.org/docs/introducing-jsx.html
  https://en.wikipedia.org/wiki/JSX_(JavaScript)
  https://www.w3schools.com/react/react_jsx.asp
*/

const element =(
  <h1>Hello, world!</h1>
);

ReactDOM.render(
  element,
  document.getElementById('hello')
);