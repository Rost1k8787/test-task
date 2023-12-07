import { combineReducers } from 'redux';
import { START_TIMER, LOG_TIMER, CLEAR_ALL_DATA } from '../actions/actionTypes';

const timerReducer = (state = false, action) => {
  switch (action.type) {
    case START_TIMER:
      return true;
    case CLEAR_ALL_DATA:
      return false;
    default:
      return state;
  }
};

const timerLogReducer = (state = [], action) => {
  switch (action.type) {
    case LOG_TIMER:
      return [
        ...state,
        {
          button: action.payload.buttonNumber,
          log: action.payload.logTime.toLocaleTimeString(), 
          click: new Date().toLocaleTimeString(),
          passed: Math.floor((action.payload.logTime - new Date()) / 1000),
        },
      ];
    case CLEAR_ALL_DATA:
      return [];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  timerRunning: timerReducer,
  timerLog: timerLogReducer,
});

export default rootReducer;
