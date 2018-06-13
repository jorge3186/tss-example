/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/13/2018 01:43:43
 * file: src/boot/RouteHandler.tsx
 * ---------------------------------------------------------
 */
import * as React from 'react';
import { isExperienceEditorActive } from '@sitecore-jss/sitecore-jss-react';
import SitecoreContentService from './SitecoreContentService';
import SitecoreContextFactory from './SitecoreContextFactory';
import App from '../app';
import NotFound from '../app/NotFound';

export interface RouteHandlerProps {
  initialState: any;
  state?: any;
  route?: any;
  notFound?: boolean
}

export interface RouteHandlerState {
  state?: any;
  notFound?: boolean;
}

// handles routing for a route that points to a Sitecore item
// specifically, retrieving route data for the item and handling when no route exists
// i.e. no matching route in the data provider
export default class RouteHandler extends React.Component<RouteHandlerProps, RouteHandlerState> {

  constructor(props: RouteHandlerProps) {
    super(props);

    if (props.initialState !== null) {
      this.state = {
        state: props.initialState,
        notFound: false,
      };
    } else {
      this.state = { notFound: true };
    }
  }

  public componentWillReceiveProps(newProps): void {
    const existingRoute = this.props.route.match.url;
    const newRoute = newProps.route.match.url;

    if (existingRoute !== newRoute) {
      // if in experience editor - force reload
      if (isExperienceEditorActive()) {
        window.location.assign(newRoute);
        return;
      }

      // get the route data for the new route
      SitecoreContentService.getRouteData(newRoute).then((routeData) => {
        if (routeData !== null) {
          // set the sitecore context data and push the new route
          SitecoreContextFactory.setSitecoreContext({
            route: routeData.sitecore.route,
            itemId: routeData.sitecore.route.itemId,
            ...routeData.sitecore.context,
          });
          this.setState({ state: routeData, notFound: false });
        } else {
          this.setState({ notFound: true });
        }
      });
    }
  }

  render() {
    if (this.state.notFound) {
      return <NotFound />;
    }

    return <App route={this.state.state.sitecore.route} />;
  }
}
