export const START_TIMER = 'START_TIMER';
export const LOG_TIMER = 'LOG_TIMER';
export const CLEAR_ALL_DATA = 'CLEAR_ALL_DATA';

export const startTimer = (buttonNumber) => ({
  type: START_TIMER,
  payload: {
    buttonNumber,
  },
});

export const logTimer = (buttonNumber, logTime) => ({
  type: LOG_TIMER,
  payload: {
    buttonNumber,
    logTime,
  },
});

export const clearAllData = () => ({
  type: CLEAR_ALL_DATA,
});
