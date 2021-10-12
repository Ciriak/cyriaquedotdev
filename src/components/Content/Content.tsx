import React from 'react';
import { Route, Switch } from 'react-router';

import WorkList from '../WorkList/WorkList';
import WorkLoader from '../workLoader/WorkLoader';
import './content.scss';
export default function Content() {
  return (
    <div className="content">
      <WorkList />
      <Switch>
        <Route path={`/work/:workId`}>
          <WorkLoader />
        </Route>
      </Switch>
    </div>
  );
}
