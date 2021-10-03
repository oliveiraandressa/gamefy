import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./pages/Routes";
import Sidebar from './components/Sidebar'

import './assets/css/paper-dashboard.css';
import './assets/css/bootstrap.min.css';
import './assets/css/gamefy.css';
import './assets/css/font-awesome.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="wrapper">
      <Sidebar/>
      <Routes/>
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
