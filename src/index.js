import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import reportWebVitals from './assets/react-utils/reportWebVitals';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/sass-util.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
  </React.Fragment>
);
reportWebVitals();
