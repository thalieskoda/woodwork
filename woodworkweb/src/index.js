import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


import global_en from "../src/translations/en/global.json"
import global_fr from "../src/translations/fr/test.json"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
