import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./page.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </AuthProvider>
);