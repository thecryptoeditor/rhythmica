import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClipPreview from "./components/ClipPreview.js";
import Login from "./components/Login.js";
import Review from "./components/Review.js";
import "./assets/styles/index.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/clip" element={<ClipPreview />} />
        <Route path="/feedback" element={<Review />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
