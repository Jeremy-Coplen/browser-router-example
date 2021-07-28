import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import routes from "./routes"
import Navbar from "./ReusableComponents/Navbar/Navbar"

import './App.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <div className="routes_container">
          <Navbar />
          <h1>React Browser Router Example</h1>
          {routes}
        </div>
      </Router>
    </div>
  );
}

export default App;
