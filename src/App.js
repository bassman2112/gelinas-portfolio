import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Routes
import Home from "./routes/home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
