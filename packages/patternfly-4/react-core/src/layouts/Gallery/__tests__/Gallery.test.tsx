import * as React from 'react';
import { Gallery } from '../Gallery';
import { GutterSize } from '../../../styles/gutters';
import { shallow } from 'enzyme';

Object.values(GutterSize).forEach((gutter: 'sm' | 'md' | 'lg') => {
  test(`gutter ${gutter}`, () => {
    const view = shallow(<Gallery gutter={gutter} />);
    expect(view).toMatchSnapshot();
  });
});
