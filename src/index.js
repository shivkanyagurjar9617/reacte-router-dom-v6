import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Expenses from './pages/Expenses';
import Invoices from './Invoices';
import Invoice from './Invoice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} >
        <Route path="Expenses" element={<Expenses />}/>
        <Route path="Invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice/> }/>
        </Route>
        <Route path="*" element={<h1>page not found</h1> }/>

        </Route>
      </Routes>
      
    </BrowserRouter>
    
  </React.StrictMode>
);

