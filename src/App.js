import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Routes
import Home from "./routes/home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
