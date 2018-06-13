/**
 * Copyright 2018 jordanalphonso.net
 * 
 * Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 *
 * ---------------------------------------------------------
 * @author Jordan Alphonso
 * created: 06/13/2018 02:26:48
 * file: src/app/components/Welcome/__tests__/Welcome.test.tsx
 * ---------------------------------------------------------
 */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Welcome from '../index';
import { WelcomeProps } from '../index';

describe('<Welcome />', () => {

  it('has a default copyright', () => {
    const props: WelcomeProps = { fields: {} };
    const component: ShallowWrapper = shallow(<Welcome {...props} />);

    expect(component.find('span').length).toEqual(1);
    expect(component.find('span').at(0).text()).toEqual('Sitecore - JSS - React 2018');
  });
  
  it('used provided copyright', () => {
    const props: WelcomeProps = { fields: {}, copyright: 'Copyright' };
    const component: ShallowWrapper = shallow(<Welcome {...props} />);

    expect(component.find('span').at(0).text()).toEqual('Copyright');
  });

  it('has 2 <RichText /> elements', () => {
    const props: WelcomeProps = { fields: {}, copyright: 'Copyright' };
    const component: ShallowWrapper = shallow(<Welcome {...props} />);

    expect(component.find('RichText').length).toEqual(2);
  });

});