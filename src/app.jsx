import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar/navBar";

const Game = lazy(() => import("./components/game/game"));
const Home = lazy(() => import("./components/home/home"));
const DateTime = lazy(() => import("./components/dateTime/clock"));

const App = () => {
  return (
    <>
      <NavBar />
      <main role="main" className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />
            <Route path="/DateTime" component={DateTime} />
          </Switch>
        </Suspense>
      </main>
    </>
  );
};

export default App;
