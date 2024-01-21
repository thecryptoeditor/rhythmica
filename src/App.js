import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./assets/styles/index.scss";

export default function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home title="About Page" /> } />
                </Routes>
            </div>
        </>
    );
}
