import React from 'react';
import { mount } from 'enzyme';
import Timer from './Timer';
import TimerButtons from '../TimerButtons/TimerButtons';

describe('Timer', () => {
  let wrapper: any;

  beforeEach(() => (wrapper = mount(<Timer />)));

  it('should display <div />', () => {
    expect(wrapper.find('div').length).toEqual(5);
  });

  it('should display a `section` with 3 `p` tags', () => {
    expect(wrapper.find('.timer-container').length).toBe(1);
    expect(wrapper.find('p').length).toBe(3);

    expect(wrapper.find('.hours').text()).toBe('00');
    expect(wrapper.find('.minutes').text()).toBe('00');
    expect(wrapper.find('.seconds').text()).toBe('00');
  });

  it('should display `timer-btn-container` ', () => {
    expect(wrapper.find('.timer-btn-container').length).toBe(1);
  });

  // it('should display <TimerButtons /> components', () => {
  //   expect(
  //     wrapper.containsAnyMatchingElements(
  //       <TimerButtons setTimeInSeconds={jest.fn()} />
  //     )
  //   ).toEqual(true);
  // });

  // it('invokes the startTimer when the click button is clicked', () => {
  //   console.log(wrapper.debug());
  //   wrapper.find('#start-timer').simulate('click');
  //   expect(wrapper.find('.seconds').text()).toBe('01');
  // });

  // it('tt', () => {
  //   expect(wrapper.find('.seconds').text()).toBe('01');
  // });
});
