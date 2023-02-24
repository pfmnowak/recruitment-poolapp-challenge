import React from "react";
import "./App.css";
import Addresses from "./components/Addresses";
import Locations from "./components/Locations";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Locations />
        <Addresses />
      </header>
    </div>
  );
}

export default App;
