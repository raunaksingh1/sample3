import React, { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./component/navbar";
import Create from "./component/create";
import index from "./component/Index";
import edit from "./component/edit";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="container">
            <Route exact path="/create" component={Create} />
            <Route exact path="/index" component={index} />
            <Route exact path="/edit/:id" component={edit} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
