import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';/
import Cards from './Cards';
import Card from './Card'
// import Card from './Card';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<>
<h1>NETFLIX TOP SERIES 2021</h1>
<Cards/>
<Card/>
</>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
