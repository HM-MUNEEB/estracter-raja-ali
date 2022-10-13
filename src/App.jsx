import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Pages></Pages>
      </BrowserRouter>
    </div>
  );
}

export default App;
