/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/13/2018 01:41:22
 * file: src/app/index.tsx
 * ---------------------------------------------------------
 */
import * as React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

import '../../assets/css/default.css';

export interface AppProps {
  route: any;
}

const App: React.SFC<AppProps> = ({ route }) => <Placeholder name="main" rendering={route} />;
export default App;
