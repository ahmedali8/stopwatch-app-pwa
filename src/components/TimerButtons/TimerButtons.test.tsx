import React from 'react';
import { shallow } from 'enzyme';
import TimerButtons from './TimerButtons';
import TimerButton from '../TimerButton/TimerButton';

describe('Timer Buttons', () => {
  let wrapper: any;

  beforeEach(
    () => (wrapper = shallow(<TimerButtons setTimeInSeconds={jest.fn()} />))
  );

  it('should contain a div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  // it('should display 3 <TimerButton /> components', () => {
  //   console.log(wrapper.debug());
  //   expect(
  //     wrapper.contains(
  //       <TimerButton id={''} buttonAction={jest.fn()} buttonValue={''} />
  //     )
  //   ).toEqual(true);
  // });
});
