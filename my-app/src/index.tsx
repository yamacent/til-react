import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MyApp from './MyApp';
import MyStatefullComponent from './MyStatefullComponent';
import AnotherStatefullComponent from './AnotherStatefullComponent';
import MyInput from './MyInput';
import FilterList from './FilterList';
import Hook from './Hook';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MyApp name="piyopiyo" />
    <MyStatefullComponent />
    <AnotherStatefullComponent />
    <MyInput />
    <FilterList />
    <Hook />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
