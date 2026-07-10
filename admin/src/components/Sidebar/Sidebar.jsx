import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
<div className='sidebar'>
  <div className="sidebar-options">
    <NavLink to='/add'className="sidebar-option">
      <img src={assets.add} alt="" className="icon-add" />
      <p>Add Items</p>
    </NavLink>
    <NavLink to='/list' className="sidebar-option">
      <img src={assets.order} alt="" className="icon-list" />
      <p>List Items</p>
    </NavLink>
    <NavLink to='/order' className="sidebar-option">
    <img src={assets.order} alt="" className="icon-order" />
      <p>Orders</p>
    </NavLink>
  </div>
</div>

        
  );
};

export default Sidebar;
