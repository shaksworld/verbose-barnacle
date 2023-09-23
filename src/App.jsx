import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Index from './pages/index';
import CryptoCurrencyPage from './pages/CryptoCurrencyPage';
import Error404 from "./pages/Error404";
import Signup from './pages/Signup';
import Signin from './pages/Signin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="cryptocurrency" element={<CryptoCurrencyPage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
          <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
