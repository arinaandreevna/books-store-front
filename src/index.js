import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";


import Page from "./templates/page"
import Main from "./components/main"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Main />} />
          <Route path="/catalog" element={<div>Сatalog</div>} />
          <Route path="/collections" element={<div>Сollections</div>} />
          <Route path="/about" element={<div>About</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

