import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import App from "./componets/App";
import "./App.css";
import { Provider } from 'react-redux';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
