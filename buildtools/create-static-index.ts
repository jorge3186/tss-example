import * as fsExtra from 'fs-extra';
import * as path from 'path';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import ServerHtml from '../src/app/ServerHtml';

/*
  CREATE STATIC INDEX

  Generates a static index.html file from the site's ServerHtml wrapper component.
  This is used as the HTML shell for client-side rendering.
*/

export function writeIndexFile(outputPath, publicPath) {
  fsExtra.ensureDirSync(outputPath);

  fsExtra.writeFileSync(path.join(outputPath, 'index.html'), getIndexContents(publicPath));
}

function getIndexContents(publicPath) {
  return ReactDOMServer.renderToStaticMarkup(
    React.createElement(ServerHtml, { distPath: publicPath })
  );
}
