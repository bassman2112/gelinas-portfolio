import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Routes
//import Home from "./routes/home";

const Home = React.lazy(() => import("./routes/home"));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Suspense
            fallback={
              <div>
                <p className="loadingtext">Loading...</p>
              </div>
            }
          >
            <Route exact path="/" component={Home} />
          </Suspense>

          <Suspense
            fallback={
              <div>
                <p className="loadingtext">Loading...</p>
              </div>
            }
          >
            <Route component={Home} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
