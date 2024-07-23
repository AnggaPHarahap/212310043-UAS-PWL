import React from "react";
import { BrowserRouter } from "react-router-dom";
import BaseRoute from "./app/BaseRoute";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <BrowserRouter>
      <BaseRoute />
    </BrowserRouter>
  );
};

export default App;
