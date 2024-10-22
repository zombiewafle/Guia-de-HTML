// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './frontend/login';
// import Home from './components/Home';
// import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="*" element={<NotFound />} /> {}  Para manejar rutas no encontradas */}
      </Routes>
    </Router>
  );
}

export default App;
