import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Custom global styles (if any)
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import './i18n';
import { LanguageProvider } from './LanguageContext'; // Import the LanguageProvider


ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);