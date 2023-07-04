import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';
import Auth from './pages/Auth';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          {/* <Route path="/admin" element={<Admin />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;