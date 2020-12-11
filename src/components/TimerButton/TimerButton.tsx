import React from 'react';

interface TimerButtonProps {
  buttonAction: () => void;
  buttonValue: string;
}

const TimerButton: React.FC<TimerButtonProps> = ({
  buttonAction,
  buttonValue,
}) => {
  return (
    <div className="button-container" onClick={() => buttonAction()}>
      <button className="button-value">{buttonValue}</button>
    </div>
  );
};

export default TimerButton;
