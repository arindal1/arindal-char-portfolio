import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Exp from "./pages/Exp.jsx";
import Pro from "./pages/Pro.jsx";
import Res from "./pages/Res.jsx";
import "../src/styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/exp" element={<Exp />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/res" element={<Res />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
