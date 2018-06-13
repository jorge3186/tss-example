/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/13/2018 02:15:19
 * file: src/app/__tests__/App.test.tsx
 * ---------------------------------------------------------
 */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import App from '../index';

describe('<App />', () => {

  it('only contains a <Placeholder />', () => {
    const component: ShallowWrapper = shallow(<App route={{}} />);
    expect(component.find('Placeholder').length).toEqual(1);
  });

});