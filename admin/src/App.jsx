import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import List from './pages/list/list';
import Add from './pages/add/add';
import Order from './pages/order/order';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
  
const App = () => {
  return (
    <div>
<ToastContainer />
<Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
