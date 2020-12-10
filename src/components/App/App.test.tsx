import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should contain a <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
