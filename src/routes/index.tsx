import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

const Routes: React.FC<any> = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route component={() => <div>NOT FOUND</div>} />
    </Switch>
  );
};

export default Routes;
