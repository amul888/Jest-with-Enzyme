import React, { Component } from "react";
import "./App.css";
import ClickCounter   from "./clickCounter"

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      counter:0
    }
  }
  render(){
    return(
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button 
          data-test="increment-button"
          onClick ={()=> this.setState({counter: this.state.counter + 1})}
          >Increment counter</button>
      </div>
    );
  }
}

export default App;

{/* <div className="App">
<h1> Hello, World! </h1>
<ClickCounter/>
</div> */}