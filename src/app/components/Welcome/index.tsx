/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/13/2018 01:42:48
 * file: src/app/components/Welcome/index.tsx
 * ---------------------------------------------------------
 */
import * as React from 'react';
import { Text, RichText, Image } from '@sitecore-jss/sitecore-jss-react';

export interface WelcomeProps {
  fields?: {[key: string]: any};
  copyright?: string;
}

const Welcome: React.SFC<WelcomeProps>  = ({ fields, copyright }) => (
  <div id="CenterColumn">
    <div id="InnerCenter">
      <div id="Header">
        <Image media={fields.logoImage} id="scLogo" />
      </div>
      <div id="Content">
        <div id="LeftContent">
          <Text tag="h1" className="contentTitle" field={fields.title} />
          <RichText className="contentDescription" field={fields.text} />
          <RichText className="contentDescription" field={fields.anotherMessage} />
        </div>
      </div>
      <div id="Footer">
        <hr className="divider" />
        <span>{copyright ? copyright : 'Sitecore - JSS - React 2018'}</span>
      </div>
    </div>
  </div>
);

export default Welcome;
