import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CheckoutForm from "../components/CheckoutForm"; // Adjust path if needed
import "./Cart.css";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const openCheckout = () => setShowCheckout(true);
  const closeCheckout = () => setShowCheckout(false);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart-msg">Your cart is currently empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)} each</p>
                <div className="cart-controls">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))
                    }
                  />
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button className="checkout-btn" onClick={openCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      {showCheckout && (
        <div className="modal-backdrop">
          <CheckoutForm onClose={closeCheckout} total={totalPrice} />
        </div>
      )}
    </div>
  );
};

export default CartPage;