import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LabComponentFunction from './functionalComponent';
import LabComponentClass from './classComponent';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <LabComponentFunction name="Basel"></LabComponentFunction>
    <hr></hr>
    <h5>Class Component</h5>
    <LabComponentClass name="Basel 2"></LabComponentClass>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
