import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Login from './components/Login';
import Register from './components/Signup'
import Dashboard from './components/dashboard';

import OrderEditForm from './components/OrdersPage/EditOrders';
import OrderForm from './components/OrdersPage/AddOrders';
import Orders from './components/OrdersPage/Orders';

import EditStocks from './components/StocksPage/EditStocks';
import AddStocks from './components/StocksPage/AddStocks';
import Stocks from './components/StocksPage/Stocks';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/stocks" element={<Stocks />} />
      <Route path="/addstocks" element={<AddStocks />} />
      <Route path="/editstock/:id" element={<EditStocks />} />
      <Route path="/editorder/:id" element={<OrderEditForm />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/addorder" element={<OrderForm />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
