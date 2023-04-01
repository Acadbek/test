import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './root';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ProductProvider from './context/product-controls';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </ProductProvider>
);
