import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './boot/Root';
import SitecoreContentService from './boot/SitecoreContentService';
import SitecoreContextFactory from './boot/SitecoreContextFactory';

const render = (state, renderFunc) => {
  // remove when not testing; this is all the data we got to render with
  console.log('state', state);

  // HTML element to place the app into
  const rootElement = document.getElementById('app');

  // render the app
  const props = { initialState: state, Router: BrowserRouter };
  renderFunc(<Root {...props} />, rootElement);
};


if ((window as any).__data) {
  SitecoreContentService.setInitialRouteData((window as any).__data);
}

// render with initial route data
SitecoreContentService.getRouteData(window.location.pathname).then((routeData) => {
  if (routeData && routeData.sitecore && routeData.sitecore.context) {
    SitecoreContextFactory.setSitecoreContext({
      route: routeData.sitecore.route,
      itemId: routeData.sitecore.route.itemId,
      ...routeData.sitecore.context,
    });
  }

  return render(routeData, (window as any).__data ? ReactDOM.hydrate : ReactDOM.render);
});