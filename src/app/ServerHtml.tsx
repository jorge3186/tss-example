/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/13/2018 01:42:35
 * file: src/app/ServerHtml.tsx
 * ---------------------------------------------------------
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom/server';

// Component that renders the HTML shell around the application
// when rendering on a Node server (SSR) or using webpack-dev-server or a static build

const ServerHtml = ({ component, initialState, distPath }) => {
  const content = component ? ReactDOM.renderToString(component) : '';

  return (
    <html>
      <head>
        {/* enable if you require CSS from npm packages <link rel="stylesheet" 
          href={`${distPath}vendor-client.css`} /> */}
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
        {initialState && (
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__data=${JSON.stringify(initialState)};`,
            }}
          />
        )}
        <script src={`${distPath}vendor-client.bundle.js`} />
        <script src={`${distPath}client.bundle.js`} />
      </body>
    </html>
  );
};

export default ServerHtml;
