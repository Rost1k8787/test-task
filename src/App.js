import React from 'react';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store/store';
import { PersistGate } from 'redux-persist/integration/react'; 

import TimerButton from './componetns/TimerButton/TimerButton';
import TimerLog from './componetns/TimerLog/TimerLog';
import ClearButton from './componetns/ClearButton/ClearButton';

import "./App.css"


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <h1>Timer App</h1>
        <TimerButton delay={2} buttonNumber={1} />
        <TimerButton delay={5} buttonNumber={2} />
        <TimerButton delay={10} buttonNumber={3} />
        <ClearButton/>
        <TimerLog />
      </div>
      </PersistGate>
    </Provider>
  );
};

export default App;

