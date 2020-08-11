import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
 


const renderedApp = render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>  
  </React.StrictMode>,
  document.getElementById('root')
);

function Index() {
  return renderedApp;
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default Index;
