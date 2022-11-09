import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";


function App() {
  return (
    <div className="container">
      <Card />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));