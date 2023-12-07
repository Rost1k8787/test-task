import React from 'react';
import { useDispatch } from 'react-redux';
import { startTimer, logTimer } from '../../redux/actions/actionTypes';
import "./TimerButton.scss";

const TimerButton = ({ delay, buttonNumber }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(startTimer());

    setTimeout(() => {
      dispatch(logTimer(buttonNumber, new Date()));
    }, delay * 1000);
  };

  return (
    <button className="btn-time" onClick={handleClick}>
      {delay} sec
    </button>
  );
};

export default TimerButton;
