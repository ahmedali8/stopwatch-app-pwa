import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';

describe('Timer', () => {
  it('should display a <div />', () => {
    const wrapper = shallow(<Timer />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
