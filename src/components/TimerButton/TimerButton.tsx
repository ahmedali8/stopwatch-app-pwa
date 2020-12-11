import React from 'react';

interface TimerButtonProps {
  btnId: string;
  buttonAction: () => void;
  buttonValue: string;
  disableBtn: boolean;
}

const TimerButton: React.FC<TimerButtonProps> = ({
  btnId,
  buttonAction,
  buttonValue,
  disableBtn,
}) => {
  return (
    <div className="button-container" onClick={() => buttonAction()}>
      <button id={btnId} className="button-value" disabled={disableBtn}>
        {buttonValue}
      </button>
    </div>
  );
};

export default TimerButton;
