import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Timer from '../Timer/Timer';

describe('App', () => {
  let wrapper: any;

  beforeEach(() => (wrapper = shallow(<App />)));

  it('should contain a <div />', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('should render Timer component', () => {
    // containsMatchingElement -> Returns whether or not a given react element exists in the shallow render tree.
    expect(wrapper.containsMatchingElement(<Timer />)).toEqual(true);
  });
});
