import React from 'react';
import { useSelector } from 'react-redux';
import "./TimerLog.scss"

const TimerLog = () => {
  const timerLog = useSelector((state) => state.timerLog);

  return (
    <div className="timer-info">
      <h2 className="title">Timer Log:</h2>
      <ul className="info">
        {timerLog.map((logEntry, index) => (
         <li key={index} className="info">
          Nº{logEntry.button}: {logEntry.log} - {logEntry.click} ({logEntry.passed} sec)
         </li>
        ))}
      </ul>
    </div>
  );
};

export default TimerLog;
