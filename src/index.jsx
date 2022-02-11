import React from "react";
import App from "./App";
import "./index.css";
import MoviePage from "./moviePage/moviePage";

import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path=":invoiceId" element={<MoviePage />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
