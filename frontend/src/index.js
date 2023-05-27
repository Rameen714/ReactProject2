import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App_ct from './components/ClassTask(Node & React)/App_ct';
import App_lab9 from './components/Lab 9/App_lab9';
import App_reactbasics from './components/ReactCoursePractise/App_reactbasics';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <App_ct />
    <App_lab9 /> */}
    <App_reactbasics />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
