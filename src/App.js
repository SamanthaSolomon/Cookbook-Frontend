import React from "react"
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Components/Display"
import Form from "./Pages/Form"


function App() {
  return (
    <div className="App">
      <Display />
      <Form />
    </div>
  );
}

export default App;
