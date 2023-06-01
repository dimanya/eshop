import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Flowers from './components/flowers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Flowers/>
  </React.StrictMode>
);
