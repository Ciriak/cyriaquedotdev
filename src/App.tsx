import React from 'react';

import './app.scss';

import SideBar from './components/SideBar/SideBar';
import Content from './components/Content/Content';
import { Route, Switch } from 'react-router';
function App() {
  return (
    <div className="cyriaque">
      <Switch>
        <Route path="/">
          <SideBar />
          <Content />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
