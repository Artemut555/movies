import React from "react";
import {BrowserRouter, Route, Router} from "react-router-dom";

export const Expenses = () => {
    return (

            <Router>
                <Route path="*" element={<p>Hell</p>} />
                <Route path={"/g"} element={<p>Hyeah</p>} />
            </Router>


    );
}

// export default function Expenses() {
//     return (
//
//     );
// }