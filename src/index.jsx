import React from "react";
import App from "./App";
import "./index.css";
// import Routing from "./Routing";
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import {Expenses} from "./expenses";

console.log(BrowserRouter);

render(
    <Expenses />,

    // <App />,
    document.getElementById("root")
);
