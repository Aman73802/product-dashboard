import React from "react";
import { useCart } from "../context/CartContext";
import { Button } from "../components/Ui/Button";
import { Link } from "react-router-dom";
import "./Cart.css"; 

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2 className="empty-cart-heading">Your cart is empty</h2>
        <Link to="/dashboard">
          <Button class="pip">Go to Dashboard</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Your Cart</h2>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div>
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">${item.price}</p>
              </div>
            </div>
            <Button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 hover:bg-red-600"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <p>Total: ${totalPrice.toFixed(2)}</p>
      </div>
       <footer class="cart-footer">
      © {new Date().getFullYear()} Productify. All rights reserved.
    </footer>
    </div>

    );
};
  
 

export default Cart;
