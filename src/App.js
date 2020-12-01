import React from "react";
import Home from "./components/Home/Home";
import MovieList from "./components/MovieList/MovieList";
import Nav from "./components/Nav/Nav";
import Watchlist from "./components/Watchlist/Watchlist";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { HashRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import "./App.css";

function App() {
  return (
    <HashRouter basename="/">
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.movies} component={MovieList} />
          <Route path={routes.watchlist} component={Watchlist} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
