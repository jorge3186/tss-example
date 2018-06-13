/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/13/2018 01:43:33
 * file: src/boot/Root.tsx
 * ---------------------------------------------------------
 */
import * as React from 'react';
import { SitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import SitecoreContextFactory from './SitecoreContextFactory';
import { Route, Switch } from 'react-router-dom';
import componentFactory from './componentFactory';
import NotFound from '../app/NotFound';
import RouteHandler from './RouteHandler';

const Root: React.SFC<any> = ({ initialState, path, graphQLClient, Router }) => {
  return (
    <SitecoreContext componentFactory={componentFactory} contextFactory={SitecoreContextFactory}>
      <Router location={path} context={{}}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <RouteHandler initialState={initialState} route={props} />}
          />
          <Route
            path="/**"
            render={(props) => <RouteHandler initialState={initialState} route={props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </SitecoreContext>
  );
};

export default Root;
