import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // If you have custom styles, you can link them here
import App from './App';  // Import your root component (App)

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Render your App component */}
  </React.StrictMode>,
  document.getElementById('root')  // Mount the App component to the DOM element with id 'root'
);
