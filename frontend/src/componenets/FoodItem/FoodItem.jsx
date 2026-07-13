import React, { useContext } from "react";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart,url } = useContext(StoreContext);
  const itemCount = cartItems[id] || 0; // Get the item count from context

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={url+"/images/"+image} alt={name} />
        
        {/* Show add button if not in cart, otherwise show counter */}
        {!itemCount ? (
          <button className="add-button" onClick={() => addToCart(id)}>+</button>
        ) : (
          <div className="food-item-counter">
            <button className="counter-button" onClick={() => removeFromCart(id)}>-</button>
            <p className="counter-text">{itemCount}</p>
            <button className="counter-button" onClick={() => addToCart(id)}>+</button>
          </div>
        )}
      </div>

      <div className="food-item-info">
        <p className="food-item-name">{name}</p>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
    
    
  );
};

export default FoodItem;
