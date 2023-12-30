import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MenuContextProvider } from "./context/Context.jsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MenuContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </MenuContextProvider>
  </React.StrictMode>
);
