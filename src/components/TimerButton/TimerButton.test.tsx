import React from 'react';
import { shallow } from 'enzyme';
import TimerButton from './TimerButton';

describe('Timer Button', () => {
  let wrapper: any;

  beforeEach(
    () =>
      (wrapper = shallow(
        <TimerButton
          btnId={''}
          buttonAction={jest.fn()}
          buttonValue={''}
          disableBtn={false}
        />
      ))
  );

  it('should contain button container', () => {
    expect(wrapper.find('.button-container').length).toEqual(1);
  });

  it('should contain button element', () => {
    expect(wrapper.find('.button-value').length).toEqual(1);
  });
});
