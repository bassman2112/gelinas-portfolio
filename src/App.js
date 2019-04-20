import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './routes/home'


// Use Testimonials if you want! I don't use it. 
//import Testimonials from  './components/Testimonials';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* --------------------------------------------------
          | This is an ultra simple router which allows us to  |
          | render the 'Home' component no matter which route  |
          | comes in! Adding more routes from here is very ez. |
          ----------------------------------------------------*/}
          <Route exact path="/" component={Home} />
          <Route path="*" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;