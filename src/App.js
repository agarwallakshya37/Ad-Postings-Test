import React from "react";
import "./App.css";
import Newpost from "./newpost";

function App() {
  return (
    <div className="App">
      <div className="header_logo">
        <h1> LOGO </h1>
      </div>
      <div >
        <Newpost />
      </div>
    </div>
  );
}

export default App;
