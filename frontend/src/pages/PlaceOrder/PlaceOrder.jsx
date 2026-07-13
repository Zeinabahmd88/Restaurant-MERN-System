import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from "../../context/StoreContext"; // Ensure correct path

const PlaceOrder = () => {
  const { cartItems, food_list } = useContext(StoreContext);

  const subtotal = food_list.reduce((acc, item) => {
    return acc + (cartItems[item.id] ? item.price * cartItems[item.id] : 0);
  }, 0);

  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="place-order">
      {/* Left Section - Delivery Information */}
      <div className="delivery-info">
        <h2>Delivery Information</h2>
        <form>
          <div className="input-group">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email address" />
          <input type="text" placeholder="Street" />
          <div className="input-group">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone" />
        </form>
      </div>

      {/* Right Section - Cart Totals */}
      <div className="cart-totals">
        <h2>Cart Summary</h2>
        <div className="cart-summary">
          <div className="cart-item">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="cart-item">
            <p>Delivery Fee</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <hr />
          <div className="cart-item total">
            <p><b>Total</b></p>
            <p><b>${total.toFixed(2)}</b></p>
          </div>
        </div>
        <button className="checkout-btn">PROCEED TO PAYMENT</button>
      </div>
    </div>
  );
};

export default PlaceOrder;
