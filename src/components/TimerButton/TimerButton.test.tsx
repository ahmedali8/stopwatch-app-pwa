import React from 'react';
import { shallow } from 'enzyme';
import TimerButton from './TimerButton';

describe('Timer Button', () => {
  let wrapper: any;

  beforeEach(
    () =>
      (wrapper = shallow(
        <TimerButton buttonAction={jest.fn()} buttonValue={''} />
      ))
  );

  it('should contain button container', () => {
    expect(wrapper.find('.button-container').length).toEqual(1);
  });

  it('should contain button element', () => {
    expect(wrapper.find('.button-value').length).toEqual(1);
  });
});
