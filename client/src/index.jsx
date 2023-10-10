import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { EthProvider } from "./contexts/EthContext";
import { AuthContextProvider } from "./contexts/Auth/AuthContext"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EthProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </EthProvider>
  </React.StrictMode>
);
