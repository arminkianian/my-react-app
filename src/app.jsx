import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Game = lazy(() => import("./components/game/game"));
const Home = lazy(() => import("./components/home/home"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
