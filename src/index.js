import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { initialState } from './context/reducer.js'
import { StateProvider } from './context/StateProvider.js'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initalState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

