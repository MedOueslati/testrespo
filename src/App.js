import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/Routes/AppRoutes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
