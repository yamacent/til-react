import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MyApp from './MyApp';
import MyStatefullComponent from './MyStatefullComponent';
import AnotherStatefullComponent from './AnotherStatefullComponent';
import MyInput from './MyInput';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MyApp name="piyopiyo" />
    <MyStatefullComponent />
    <AnotherStatefullComponent />
    <MyInput />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
