import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Photosets from '../pages/Photosets/Photosets';
import SinglePhotoset from '../pages/SinglePhotoset/SinglePhotoset';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Photosets />} />
        <Route path="/photo/:id" element={<SinglePhotoset />} />
        <Route path="*" element={<h1>Errror...</h1>} />
      </Routes>
    </div>
  );
}

export default App;
