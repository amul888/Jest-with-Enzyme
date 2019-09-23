import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App.js";
import Congrats from "./Congrats";
import store from "./configureStore";




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root"));
// ReactDOM.render(<Congrats />, document.getElementById("root"));
