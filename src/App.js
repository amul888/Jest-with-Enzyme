import React, { Component } from "react";
import "./App.css";
import ClickCounter   from "./clickCounter"

class App extends Component{
  render(){
    return(
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently</h1>
        <button data-test="increment-button">Increment counter</button>
      </div>
    );
  }
}

export default App;

{/* <div className="App">
<h1> Hello, World! </h1>
<ClickCounter/>
</div> */}