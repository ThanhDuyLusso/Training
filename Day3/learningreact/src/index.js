import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ex1 from './excercise/ex1';
import ex2 from './excercise/ex2';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <ex2 /> */}
    {/* <ex1 /> */}
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
