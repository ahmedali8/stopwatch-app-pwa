import React from 'react';
import { shallow } from 'enzyme';
import TimerButtons from './TimerButtons';
import TimerButton from '../TimerButton/TimerButton';

describe('Timer', () => {
  let wrapper: any;

  beforeEach(
    () => (wrapper = shallow(<TimerButtons setTimeInSeconds={jest.fn()} />))
  );

  it('should display a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should display a `section` with 3 `p` tags', () => {
    expect(wrapper.find('.timer-container').length).toBe(1);
    expect(wrapper.find('p').length).toBe(3);

    expect(wrapper.find('.hours').text()).toBe('0');
    expect(wrapper.find('.minutes').text()).toBe('0');
    expect(wrapper.find('.seconds').text()).toBe('0');
  });

  it('should display `timer-btn-container` ', () => {
    expect(wrapper.find('.timer-btn-container').length).toBe(1);
  });

  it('should display <TimerButton /> components', () => {
    expect(
      wrapper.containsMatchingElement(
        <TimerButton buttonAction={''} buttonValue={''} />
      )
    ).toEqual(true);
  });
});
