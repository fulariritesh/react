const heading = React.createElement(
  //this creates a react element which is an object
  "h1",
  { id: "heading" },
  "Hello world from React!" //this can be another ReactElement to create a nested pattern. This can also be an array of 2 react elements to have siblings as children
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); //here that object gets converted to the actual h1 tag and is put in the root.
