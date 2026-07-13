import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from "../../context/StoreContext"; // Adjust the path if needed
import { Navigate, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart,url } = useContext(StoreContext);

  const subtotal = food_list.reduce((acc, item) => {
    return acc + (cartItems[item.id] ? item.price * cartItems[item.id] : 0);
  }, 0);

  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;
const navigate=useNavigate();
  return (
    <div className='cart-page'>

      {/* Cart Content Wrapper */}
      <div className="cart-wrapper">

        {/* Left side - Cart Items */}
        <div className='cart-container'>
          <h1 className='cart-header'>Shopping Cart</h1>
          {subtotal === 0 ? (
            <p className="empty-cart-message">Your cart is empty!</p>
          ) : (
            <div className="cart-items">
              <div className="cart-items-title">
                <p>Item</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
              </div>
              {food_list.map((item) => {
                if (cartItems[item.id] > 0) {
                  return (
                    <div key={item.id} className='cart-item'>
                      <div className='cart-items-item'>
                        <img src={url+"/images/"+item.image} alt={item.name} />
                        <p>{item.name}</p>
                        <p>${item.price.toFixed(2)}</p>
                        <p>{cartItems[item.id]}</p>
                        <p>${(item.price * cartItems[item.id]).toFixed(2)}</p>
                        <p onClick={() => removeFromCart(item.id)} className='cross'>×</p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          )}
        </div>

        {/* Right side - Cart Total */}
        <aside className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${total.toFixed(2)}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} className="checkout-btn" disabled={subtotal === 0}>
            Proceed To Checkout
          </button>
        </aside>

      </div>

    </div>
  );
};

export default Cart;
