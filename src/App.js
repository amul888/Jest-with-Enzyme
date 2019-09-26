import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import ClickCounter from "./clickCounter";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import Input from "./Input";
import { getSecretWord } from "./actions";

// click counter 1

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0
//     }
//   }
//   render() {
//     const decrementValue = (this.state.counter < 0) ? 0 : this.state.counter - 1;
//     const guessedWords = [
//       { guessedWord: 'train', letterMatchCount: 3 },
//       { guessedWord: 'agile', letterMatchCount: 1 },
//       { guessedWord: 'party', letterMatchCount: 5 },
//   ]
//     return (
//       <div data-test="component-app" className="container">
//         <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
//         {this.state.counter < 0 && <h1 data-test="counter-display">The counter can not go below 0 </h1>}

//         <button
//           data-test="increment-button"
//           onClick={() => this.setState({ counter: this.state.counter + 1 })}
//         >Increment counter</button>
//         <button
//           data-test="dcrement-button"
//           onClick={() => this.setState({ counter: decrementValue })}
//         >Dcrement counter</button>
//         <Congrats success = {true}/>
//         <GuessedWords guessedWords={guessedWords}/>
//       </div>
//     );
//   }
// }

// export default App;



{/* <div className="App">
<h1> Hello, World! </h1>
<ClickCounter/>
</div> */}


class App extends Component {
  render() {
    const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'agile', letterMatchCount: 1 },
      { guessedWord: 'party', letterMatchCount: 5 },
    ]
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input/>
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    )
  }
}
const mapStateToProps =(state)=>{
  const {success, guessedWords, secretWord} = state;
  return {success, guessedWords, secretWord};
}
export default connect(mapStateToProps,{ getSecretWord })(App)


