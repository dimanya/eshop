import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import RegistrationPage from './RegistrationPage';
import AddProductForm from './ProductForm';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/flowers" element={<AddProductForm />} />
        {/* Add more routes for other pages */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
