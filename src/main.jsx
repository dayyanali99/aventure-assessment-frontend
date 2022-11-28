import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BarsProvider from "./context/BarsProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BarsProvider>
      <App />
    </BarsProvider>
  </React.StrictMode>
);
