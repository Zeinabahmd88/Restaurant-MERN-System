import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        The menu is a list of food and beverages offered to the customer. A menu may be 
        à la carte – which presents a list of options from which customers choose.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className={`explore-menu-item ${category === item.menu_name ? 'active' : ''}`} // ✅ Adds active class
            onClick={() => setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))}
          >
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
