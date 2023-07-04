import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          {/* <Route path="/admin" element={<Admin />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;