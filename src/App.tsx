import React from 'react';

import './app.scss';
import { Route, Switch } from 'react-router';
import WorkLoader from './components/workLoader/WorkLoader';
import Home from './components/home/Home';
import WorkList from './components/WorkList/WorkList';
import TopBar from './components/TopBar/TopBar';
function App() {
  return (
    <div className="cyriaque">
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
          <WorkList />
        </Route>
        <Route path="/work/:workid">
          <WorkLoader />
        </Route>
        <Route path="/dashboard"></Route>
      </Switch>
    </div>
  );
}

export default App;
